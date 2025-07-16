import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuFileSpreadsheet } from 'react-icons/lu';
import TaskStatusTabs from '../../components/TaskStatusTabs';
import TaskCard from '../../components/cards/TaskCard';


const ManageTasks = () => {

    const [allTasks, setAllTasks] = useState([]);

    const [tabs, setTabs] = useState([]);
    const [filterStatus, setFilterStatus] = useState("All");

    const navigate = useNavigate();

    const getAllTasks = async () => {

        try {
            const response = await axiosInstance.get(API_PATHS.TASKS.GET_All_TASKS, {
                params: {
                    status: filterStatus === "All" ? "" : filterStatus,
                },
            });

            setAllTasks(response.data?.tasks?.length > 0 ? response.data.tasks : []);

            //Map statusSummary data with fixed labels and order
            const statusSummary = response.data?.statusSummary || {};

            const statusArray = [
                { label: "All", count: statusSummary.all || 0},
                { label: "Pending", count: statusSummary.pendingTasks || 0},
                { label: "In Progress", count: statusSummary.inProgress || 0},
                { label: "Completed", count: statusSummary.completedTasks || 0},  
            ];

            setTabs(statusArray);
        }catch(error){
            console.error("Error fetching tasks:", error);
            
            // Mock data for frontend testing
            const mockTasks = [
                {
                    _id: '1',
                    title: 'Design Homepage',
                    status: 'Pending',
                    priority: 'High',
                    createdAt: '2025-01-15'
                },
                {
                    _id: '2', 
                    title: 'Fix Login Bug',
                    status: 'In Progress',
                    priority: 'Medium',
                    createdAt: '2025-01-14'
                },
                {
                    _id: '3',
                    title: 'Update Documentation',
                    status: 'Completed',
                    priority: 'Low',
                    createdAt: '2025-01-13'
                }
            ];
            
            setAllTasks(mockTasks);
            
            const mockStatusArray = [
                { label: "All", count: 3},
                { label: "Pending", count: 1},
                { label: "In Progress", count: 1},
                { label: "Completed", count: 1},  
            ];
            
            setTabs(mockStatusArray);
        }
    };

    const handleClick =(taskData) => {
        navigate(`/admin/create-task`, {state: { taskId: taskData._id}});
    };

    // download task report 
    const handleDownloadReport = async () => {
    };

    useEffect(() => {
        getAllTasks(filterStatus);
        return () => {};
    }, [filterStatus]);


    return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl md:text-xl font-medium ">My Tasks</h2>
          </div>

          <div className="flex items-center gap-3">
            <TaskStatusTabs
                tabs={tabs}
                activeTab={filterStatus}
                setActiveTab={setFilterStatus}
            />

            <button className="hidden lg:flex download-btn" onClick={handleDownloadReport}>
                <LuFileSpreadsheet className="text-lg" />
                Download Report
            </button>
          </div>
        </div>
        
        {/* Tasks List */}
        <div className="mt-6">
          {allTasks.length > 0 ? (
            <div className="space-y-3">
              {allTasks.map((task) => (
                <div 
                  key={task._id}
                  className="card cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleClick(task)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{task.title}</h3>
                      <p className="text-sm text-gray-500">Created: {task.createdAt}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.status}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === 'High' ? 'bg-red-100 text-red-800' :
                        task.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No tasks found</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {allTasks?.map((item, index) => (
                <TaskCard
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    priority={item.priority}
                    status={item.status}
                    progress={item.progress}
                    createdAt={item.createdAt}
                    dueDate={item.dueDate}
                    assignedTo={item.assignedTo?.map((item) => item.profileImageUrl)}
                    attachmentCount={item.attachments?.length || 0}
                    completedTodoCount={item.completedTodoCount || 0}
                    todoCheckList={item.todoCheckList || []}
                    onClick={() => {
                        handleClick(item);
                    }}
                    />
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ManageTasks