import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {api_rout_url} from '../../utils/Constants'

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [editedUserData, setEditedUserData] = useState({ name: '', email: '', role: '' });
    const [editingUser, setEditingUser] = useState(null);
    

    const togglebtn = () =>{
      setEditingUser(false)
    }
   
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${api_rout_url}/api/auth/users`);
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data.users);
                } else {
                    console.error("Failed to fetch users data");
                }
            } catch (error) {
                console.error("Error fetching users data:", error);
            }
        };

        fetchUsers();
    }, []);

    const deleteUser = async (_id) => {
        try {
            const response = await fetch(`${api_rout_url}/api/auth/user/delete/${_id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setUsers(users.filter(user => user._id !== _id));
                toast.error("User deleted successfully");
            } else {
                console.error("Failed to delete user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setEditedUserData({
            name: user.name,
            email: user.email,
            role: user.role
        });
    };

    const handleChange = (e) => {
        setEditedUserData({ ...editedUserData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api_rout_url}/api/auth/user/update/${editingUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUserData),
            });

            if (response.ok) {
                setUsers(users.map(user => user._id === editingUser._id ? { ...user, ...editedUserData } : user));
                setEditingUser(null);
                setEditedUserData({ name: '', email: '', role: '' });
                toast.success("User updated successfully");
            } else {
                console.error("Failed to update user");
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };


  
    




    return (
        <div className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-6 text-gray-300">
                <FontAwesomeIcon icon={faUsers} className='text-gray-600' /> {"Users"}
            </h1>
            <ToastContainer />
            {users.length >= 1 ? (
                <table className="w-full">
                    <thead>
                        <tr className='text-white'>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Email</th>
                             <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className='text-gray-300'>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.role}</td>
                                <td className="border px-2 py-2">
                                    <FontAwesomeIcon icon={faEdit} className="text-blue-500 cursor-pointer" onClick={() => handleEditUser(user)} />
                                <FontAwesomeIcon icon={faTrash} className="text-red-500 ml-2 cursor-pointer" onClick={() => deleteUser(user._id)} />
                                   

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='flex justify-center text-red-500'>No Users Found</p>
            )}
            {editingUser && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-black p-8 rounded-lg">
                        <div className='flex '>
                        <h2 className="text-2xl font-bold mb-4 text-white">Edit User <FontAwesomeIcon icon={faEdit}  className='text-lg '/></h2> <FontAwesomeIcon icon={faTimes}  className='text-white ml-16 text-md  cursor-pointer ' onClick={togglebtn}/>
                        </div>
                        
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                       
                    
                       
                           
                            <input type="text" name="name" value={editedUserData.name} onChange={handleChange} placeholder="Name" className="mb-2 p-2 border-2  rounded-md " required  />
                            <input type="email" name="email" value={editedUserData.email} onChange={handleChange} placeholder="Email" className="mb-2 p-2 border-2 rounded-md  " required />
                            <input type="text" name="role" value={editedUserData.role} onChange={handleChange} placeholder="Role" className="mb-2 p-2 border-2 rounded-md  " required />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default UsersPage;
