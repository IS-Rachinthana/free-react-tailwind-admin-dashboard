import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

interface FlightDetails {
  flightId: number;
  droneID: string;
  flightStartTime: string;
  flightEndTime: string;
  totalFlightDuration: string;
}

const FlightDetailsTable = () => {
  const [flights, setFlights] = useState<FlightDetails[]>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/flightInformation');
        setFlights(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch flight details');
        console.error('Error fetching flight details:', error);
      }
    };
    fetchFlights();
  }, []);

  const handleInputChange = (index: number, field: keyof FlightDetails, value: string) => {
    setFlights(prev => prev.map((item, idx) => idx === index ? { ...item, [field]: value } : item));
  };

  const handleUpdateFlightDetail = async (flight: FlightDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/flightInformation/${flight.flightId}`, flight);
      Notiflix.Notify.success('Flight detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update flight detail');
      console.error('Error updating flight detail:', error);
    }
  };

  const handleDeleteFlightDetail = async (flightId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/flightInformation/${flightId}`);
      setFlights(prev => prev.filter(flight => flight.flightId !== flightId));
      Notiflix.Notify.success('Flight detail deleted successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete flight detail');
      console.error('Error deleting flight detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
        <tr className=" text-left meta-4">
            <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white'> Flight Details Table</th>
          </tr> 
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">Flight ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Drone ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Flight Start Time</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Flight End Time</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Total Flight Duration</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={flight.flightId}>
                <td className="border-b py-5 px-4">{flight.flightId}</td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={flight.droneID}
                    onChange={(e) => handleInputChange(index, 'droneID', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={flight.flightStartTime}
                    onChange={(e) => handleInputChange(index, 'flightStartTime', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={flight.flightEndTime}
                    onChange={(e) => handleInputChange(index, 'flightEndTime', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={flight.totalFlightDuration}
                    onChange={(e) => handleInputChange(index, 'totalFlightDuration', e.target.value)}
                  />
                </td>
                <td className="border-b py-5 px-4">
                  <button onClick={() => handleUpdateFlightDetail(flight)}>Update</button>
                  <button onClick={() => handleDeleteFlightDetail(flight.flightId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightDetailsTable;
