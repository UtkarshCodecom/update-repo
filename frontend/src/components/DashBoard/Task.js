import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_rout_url } from '../../utils/Constants'

const Task = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [taskFormData, setTaskFormData] = useState({ title: '', description: '', status: '', userId: '', deadline: { day: '', month: '', year: '' } });
    const [creatingTask, setCreatingTask] = useState(false);

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

    const handleCreateTask = async () => {
        setCreatingTask(true);
    };

    const handleSubmitTask = async (e) => {
        e.preventDefault();
        if (!selectedUser) {
            toast.error("Please select a user.");
            return;
        }
        if (!taskFormData.title || !taskFormData.description || !taskFormData.status) {
            toast.error("Please fill out all required fields.");
            return;
        }
        try {
            const response = await fetch(`${api_rout_url}/api/auth/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: taskFormData.title,
                    description: taskFormData.description,
                    status: parseInt(taskFormData.status),
                    userId: selectedUser._id,
                    deadline: `${taskFormData.deadline.year}-${taskFormData.deadline.month}-${taskFormData.deadline.day}`
                }),
            });
            if (response.ok) {
                toast.success("Task created successfully");
                setCreatingTask(false);
                setTaskFormData({ title: '', description: '', status: '', userId: '', deadline: { day: '', month: '', year: '' } });
            } else {
                const data = await response.json();
                toast.error(data.error || "Failed to create task");
            }
        } catch (error) {
            console.error("Error creating task:", error);
            toast.error("Failed to create task. Please try again later.");
        }
    };

    const handleTaskInputChange = (e) => {
        setTaskFormData({ ...taskFormData, [e.target.name]: e.target.value });
    };

    const handleUserSelectChange = (e) => {
        const selectedUserId = e.target.value;
        const user = users.find(user => user._id === selectedUserId);
        setSelectedUser(user);
    };

    const handleDeadlineChange = (e) => {
        setTaskFormData({
            ...taskFormData,
            deadline: {
                ...taskFormData.deadline,
                [e.target.name]: e.target.value
            }
        });
    };

    return (
        <div className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-6 text-gray-300">
                <FontAwesomeIcon icon={faTasks} className='text-gray-600' /> {"Task"}
            </h1>
            <ToastContainer />
            <div className="mb-4">
                <label htmlFor="userSelect" className="text-lg font-medium text-gray-600">
                    To Assign a task :
                </label>
                <select
                    id="userSelect"
                    name="userSelect"
                    onChange={handleUserSelectChange}
                    value={selectedUser ? selectedUser._id : ''}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Select a user</option>
                    {users.map((user, index) => (
                        <option key={index} value={user._id}>{user.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleCreateTask} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Task
            </button>
            {creatingTask && (
                <div className="p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Create Task</h2>
                    <form onSubmit={handleSubmitTask} className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="title" className="text-sm font-medium text-gray-600">
                                Title:
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={taskFormData.title}
                                onChange={handleTaskInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder='Title'
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-sm font-medium text-gray-600">
                                Description:
                            </label>
                            <textarea
                                placeholder='Description'
                                id="description"
                                name="description"
                                value={taskFormData.description}
                                onChange={handleTaskInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            ></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="status" className="text-sm font-medium text-gray-600">
                                Status:
                            </label>
                            <input
                                type="text"
                                id="status"
                                name="status"
                                placeholder='Status'
                                value={taskFormData.status}
                                onChange={handleTaskInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="deadline" className="text-sm font-medium text-gray-600">
                                Deadline:
                            </label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="day"
                                    placeholder="Day"
                                    value={taskFormData.deadline.day}
                                    onChange={handleDeadlineChange}
                                    className="mt-1 mr-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/4"
                                    required
                                />
                                <input
                                    type="number"
                                    name="month"
                                    placeholder="Month"
                                    value={taskFormData.deadline.month}
                                    onChange={handleDeadlineChange}
                                    className="mt-1 mr-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/4"
                                    required
                                />
                                <input
                                    type="number"
                                    name="year"
                                    placeholder="Year"
                                    value={taskFormData.deadline.year}
                                    onChange={handleDeadlineChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-1/4"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Create Task
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Task;
