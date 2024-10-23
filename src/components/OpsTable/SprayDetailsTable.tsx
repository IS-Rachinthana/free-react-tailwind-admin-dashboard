import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

// Define the structure of the spray details data
interface SprayDetails {
  eventId: number;
  droneId: string;
  jobId: string;
  cropType: string;
  chemicalType: string;
  sprayingDate: string;
  chemicalQuantity: string;
  volume: string;
  concentration: string;
}

const SprayDetailsTable = () => {
  const [sprayDetails, setSprayDetails] = useState<SprayDetails[]>([]);

  useEffect(() => {
    const fetchSprayDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/sprayingDetails');
        setSprayDetails(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch spray details');
        console.error('Error fetching spray details:', error);
      }
    };
    fetchSprayDetails();
  }, []);

  const handleInputChange = (index: number, field: keyof SprayDetails, value: string) => {
    setSprayDetails(prev => prev.map((item, idx) => idx === index ? { ...item, [field]: value } : item));
  };

  const handleUpdateSprayDetail = async (spray: SprayDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/sprayingDetails/${spray.eventId}`, spray);
      Notiflix.Notify.success('Spray detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update spray detail');
      console.error('Error updating spray detail:', error);
    }
  };

  const handleDeleteSprayDetail = async (eventId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/sprayingDetails/${eventId}`);
      setSprayDetails(prev => prev.filter(detail => detail.eventId !== eventId));
      Notiflix.Notify.success('Spray detail deleted successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete spray detail');
      console.error('Error deleting spray detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
        <tr className=" text-left meta-4">
            <th className='min-w-[200px] py-4 px-4 font-medium text-black dark:text-white'> Spraying Details Table</th>
          </tr>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">Event ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Drone ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Job ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Crop Type</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Chemical Type</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Spraying Date</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Chemical Quantity</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Volume</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Concentration</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sprayDetails.map((spray, index) => (
              <tr key={spray.eventId}>
                <td className="border-b py-5 px-4">{spray.eventId}</td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.droneId}
                    onChange={(e) => handleInputChange(index, 'droneId', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.jobId}
                    onChange={(e) => handleInputChange(index, 'jobId', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.cropType}
                    onChange={(e) => handleInputChange(index, 'cropType', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.chemicalType}
                    onChange={(e) => handleInputChange(index, 'chemicalType', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.sprayingDate}
                    onChange={(e) => handleInputChange(index, 'sprayingDate', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.chemicalQuantity}
                    onChange={(e) => handleInputChange(index, 'chemicalQuantity', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.volume}
                    onChange={(e) => handleInputChange(index, 'volume', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={spray.concentration}
                    onChange={(e) => handleInputChange(index, 'concentration', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <button onClick={() => handleUpdateSprayDetail(spray)}>Update</button>
                  <button onClick={() => handleDeleteSprayDetail(spray.eventId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SprayDetailsTable;
