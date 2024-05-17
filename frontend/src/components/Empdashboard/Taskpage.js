import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_rout_url } from '../../utils/Constants';

const Taskpage = () => {
    const selectUserId = (state) => state.auth.userId;
    const userId = useSelector(selectUserId);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const authToken = sessionStorage.getItem('userId');
                if (!authToken) {
                    throw new Error('User is not authenticated');
                }

                const response = await fetch(`${api_rout_url}/api/auth/tasks/${authToken}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.tasks) {
                        setTasks(data.tasks);
                    }
                } else {
                    throw new Error('Failed to fetch tasks');
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
                toast.error("Error fetching tasks");
            }
        };

        fetchTasks();
    }, [userId]);

    const calculateProgress = (deadline) => {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        const timeDifference = deadlineDate - now;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        let progressColor;
        if (daysLeft <= 1) {
            progressColor = 'red';
        } else if (daysLeft <= 5) {
            progressColor = 'yellow';
        } else {
            progressColor = 'green';
        }

        const totalTime = deadlineDate - now;
        const remainingTime = Math.max(timeDifference, 0);
        return {
            percentage: ((totalTime - remainingTime) / totalTime) * 100,
            color: progressColor
        };
    };

    return (
        <div className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-6 text-gray-300">
                <FontAwesomeIcon icon={faTasks} className='text-gray-600'/> {"Tasks For you "}
            </h1>
            <ToastContainer />
          { tasks.length ===0 ? <p className='text-red-500'>No Tasks Found for you </p> :  <div className="overflow-x-auto">
                <h2 className="text-lg font-bold mb-3">{}</h2>
                <table className="w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Title</th>
                            <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Description</th>
                            <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Status</th>
                            <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Deadline</th>
                            <th className="border border-gray-400 py-2 px-4 sm:w-1/5">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task._id} className="border border-gray-400 text-gray-400">
                                <td className="border border-gray-400 py-2 px-4">{task.title}</td>
                                <td className="border border-gray-400 py-2 px-4">{task.description}</td>
                                <td className="border border-gray-400 py-2 px-4">{task.status}</td>
                                <td className="border border-gray-400 py-2 px-4">{task.deadline}</td>
                                <td className="border border-gray-400 py-2 px-4">
                                    <div className="bg-gray-300 h-4 rounded-full">
                                        <div className={`bg-${calculateProgress(task.deadline).color}-500 h-4 rounded-full`} style={{ width: `${calculateProgress(task.deadline).percentage}%` }}></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                     </tbody>
                </table>
            </div>}
        </div>
    );
};

export default Taskpage;
