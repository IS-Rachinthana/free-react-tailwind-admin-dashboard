import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

interface TransportDetails {
  transPortId: number;
  vehicleType: string;
  vehicleNumberPlate: string;
  departureTime: string;
  startTime: string;
  mileage: string;
  transportDate: string;
  pilotId: string;
}

const TransportDetailsTable = () => {
  const [transportDetails, setTransportDetails] = useState<TransportDetails[]>([]);

  useEffect(() => {
    const fetchTransportDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/transportationDetails');
        setTransportDetails(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch transport details');
        console.error('Error fetching transport details:', error);
      }
    };
    fetchTransportDetails();
  }, []);

  const handleInputChange = (index: number, field: keyof TransportDetails, value: string) => {
    setTransportDetails(prev => prev.map((item, idx) => idx === index ? {...item, [field]: value} : item));
  };

  const handleUpdateTransportDetail = async (transport: TransportDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/transportationDetails/${transport.transPortId}`, transport);
      Notiflix.Notify.success('Transport detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update transport detail');
      console.error('Error updating transport detail:', error);
    }
  };

  const handleDeleteTransportDetail = async (transPortId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/transportationDetails/${transPortId}`);
      setTransportDetails(prev => prev.filter(detail => detail.transPortId !== transPortId));
      Notiflix.Notify.success('Transport detail deleted successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete transport detail');
      console.error('Error deleting transport detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
          <tr className=" text-left meta-4">
              <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white'> Transport Details Table</th>
            </tr>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Transport ID</th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Vehicle Type</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Number Plate</th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">Departure Time</th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">Start Time</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Mileage</th>
              <th className="min-w-[250px] py-4 px-4 font-medium text-black dark:text-white">Transport Date</th>
              <th className="min-w-[250px] py-4 px-4 font-medium text-black dark:text-white">Pilot ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
        <tbody>
          {transportDetails.map((transport, index) => (
            <tr key={transport.transPortId}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <input
                   type="text"
                  className="w-full bg-transparent"
                  value={transport.transPortId}
                  onChange={(e) => handleInputChange(index, 'transPortId', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                   type="text"
                  className="w-full bg-transparent"
                  value={transport.vehicleType}
                  onChange={(e) => handleInputChange(index, 'vehicleType', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                      type="text"
                  className="w-full bg-transparent"
                  value={transport.vehicleNumberPlate}
                  onChange={(e) => handleInputChange(index, 'vehicleNumberPlate', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                      type="text"
                  className="w-full bg-transparent"
                  value={transport.departureTime}
                  onChange={(e) => handleInputChange(index, 'departureTime', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                      type="text"
                  className="w-full bg-transparent"
                  value={transport.startTime}
                  onChange={(e) => handleInputChange(index, 'startTime', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                      type="text"
                  className="w-full bg-transparent"
                  value={transport.mileage}
                  onChange={(e) => handleInputChange(index, 'mileage', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                      type="text"
                  className="w-full bg-transparent"
                  value={transport.transportDate}
                  onChange={(e) => handleInputChange(index, 'transportDate', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                      type="text"
                  className="w-full bg-transparent"
                  value={transport.pilotId}
                  onChange={(e) => handleInputChange(index, 'pilotId', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button  onClick={() => handleUpdateTransportDetail(transport)}>Update</button>
                <button onClick={() => handleDeleteTransportDetail(transport.transPortId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TransportDetailsTable;
