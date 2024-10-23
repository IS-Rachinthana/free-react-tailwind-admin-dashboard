
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';


// Assuming the type of data received from the API is as follows:
interface DronePilot {
  pilotId: number;
  pilotName: string;
  pilotAddress: string;
  pilotTel: string;
  pilotDob: Date;
  // ... include any other properties that are relevant
}

const PilotDetailsTable = () => {
  const [dronePilots, setDronePilots] = useState<DronePilot[]>([]);

  useEffect(() => {
    const fetchDronePilots = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/dronePilots');
        setDronePilots(response.data);
      } catch (error) {
        console.error('Error fetching drone pilots:', error);
      }
    };

    fetchDronePilots();
  }, []);

  const handleInputChange = (index: number, field: string, value: any) => {
    setDronePilots((prevPilots) => {
      const updatedPilots = prevPilots.map((pilot, idx) => {
        if (idx === index) {
          return { ...pilot, [field]: value };
        }
        return pilot;
      });
      return updatedPilots;
    });
  };
  


  const handleUpdatePilot = async (event: { target: any; }) => {
    const button = event.target;
    const tr = button.closest('tr');
    if (!tr) {
      console.error('Unable to find parent tr element');
      return;
    }
  
    const inputs = tr.querySelectorAll('input');
    const pilotData = Array.from(inputs).reduce((data, input) => {
      data[input.name] = input.value;
      return data;
    }, {});
  
    try {
      await axios.put(`http://localhost:3001/api/dronePilots/${pilotData.pilotid}`, pilotData);
      Notiflix.Notify.success('Pilot updated successfully');
      //console.log('Update successful:', response.data);
    } catch (error) {
      Notiflix.Notify.failure('Failed to update pilot');
      //console.error('Error updating pilot:', error);
    }

    
  };
  
  const handleDeletePilot = async (pilotId: any) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/dronePilots/${pilotId}`);
      Notiflix.Notify.success('Pilot Deleted successfully');
      window.location.reload();
      // You can update the local state or perform any other actions upon a successful deletion
    } catch (error) {
      console.error('Error deleting pilot:', error);
      Notiflix.Notify.failure('Failed to Delete pilot');
      // Handle the error, such as displaying a message to the user
    }
  };
  
  

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className=" text-left meta-4">
              <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white'> Drone Pilot Details Table </th>
            </tr>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Pilot ID</th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">Pilot Name</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Pilot Address</th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Pilot Telephone</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Pilot DoB</th>
              {/* Add additional headers here */}
              {/* Actions header is assumed to be present for potential actions like edit/delete */}
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dronePilots.map((pilot, key) => (
             <tr key={key}>
  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
    {pilot.pilotId}
    <input type="hidden" name="pilotid" value={pilot.pilotId} />
  </td>
  <td className="border-b bg-transparent border-[#eee] py-5 px-4 dark:border-strokedark">
      <input
          name="name"
          type="text"
          value={pilot.pilotName}
          className="w-full bg-transparent"
          onChange={(e) => handleInputChange(key, 'pilotName', e.target.value)}
        />
  </td>
  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    name="address"
                    type="text"
                    value={pilot.pilotAddress}
                    className="w-full bg-transparent"
                    onChange={(e) => handleInputChange(key, 'pilotAddress', e.target.value)}
                  />
  </td>
  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
  <input
  name="tel"
                    type="text"
                    value={pilot.pilotTel}
                    className="w-full bg-transparent"
                    onChange={(e) => handleInputChange(key, 'pilotTel', e.target.value)}
                  />
  </td>
  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
  <input
    name="dob"
                    type="date"
                    value={pilot.pilotDob ? pilot.pilotDob.split('T')[0] : ''} // Assuming the pilotDob is in ISO format
                    className="w-full bg-transparent"
                    onChange={(e) => handleInputChange(key, 'pilotDob', e.target.value)}
                  />
  </td>
  {/* Action cells with buttons or icons */}
  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
    <div className="flex items-center space-x-3.5">
    
    <button className="hover:text-primary" onClick={handleUpdatePilot} >Update</button>

    <button className="hover:text-primary" onClick={() => handleDeletePilot(pilot.pilotId)}>Delete</button>
    </div>
  </td>
</tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PilotDetailsTable;
