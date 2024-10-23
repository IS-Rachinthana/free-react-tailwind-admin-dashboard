import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

interface DroneDetails {
  droneId: number;
  droneModel: string;
  operatorName: string;
  operatorContact: string;
  droneCapacity: string;
}

const DroneDetailsTable = () => {
  const [drones, setDrones] = useState<DroneDetails[]>([]);

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/droneInformation');
        setDrones(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch drone details');
        console.error('Error fetching drone details:', error);
      }
    };
    fetchDrones();
  }, []);

  const handleInputChange = (index: number, field: keyof DroneDetails, value: string) => {
    setDrones(prev => prev.map((item, idx) => idx === index ? { ...item, [field]: value } : item));
  };

  const handleUpdateDroneDetail = async (drone: DroneDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/droneInformation/${drone.droneId}`, drone);
      Notiflix.Notify.success('Drone detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update drone detail');
      console.error('Error updating drone detail:', error);
    }
  };

  const handleDeleteDroneDetail = async (droneId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/droneInformation/${droneId}`);
      setDrones(prev => prev.filter(drone => drone.droneId !== droneId));
      Notiflix.Notify.success('Drone detail deleted successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete drone detail');
      console.error('Error deleting drone detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
        <tr className=" text-left meta-4">
            <th className='min-w-[180px] py-4 px-4 font-medium text-black dark:text-white'> Drone Details Table</th>
          </tr>
          <tr>
            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>Drone ID</th>
            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>Drone Model</th>
            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>Operator Name</th>
            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>Operator Contact</th>
            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>Drone Capacity</th>
            <th className='min-w-[120px] py-4 px-4 font-medium text-black dark:text-white'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drones.map((drone, index) => (
            <tr key={drone.droneId}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{drone.droneId}</td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  className="w-full bg-transparent"
                  type="text"
                  value={drone.droneModel}
                  onChange={(e) => handleInputChange(index, 'droneModel', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                type="text"
                  className="w-full bg-transparent"
                  value={drone.operatorName}
                  onChange={(e) => handleInputChange(index, 'operatorName', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                type="text"
                  className="w-full bg-transparent"
                  value={drone.operatorContact}
                  onChange={(e) => handleInputChange(index, 'operatorContact', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                type="text"
                  className="w-full bg-transparent"
                  value={drone.droneCapacity}
                  onChange={(e) => handleInputChange(index, 'droneCapacity', e.target.value)}
                />
              </td >
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button onClick={() => handleUpdateDroneDetail(drone)}>Update</button>
                <button onClick={() => handleDeleteDroneDetail(drone.droneId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DroneDetailsTable;
