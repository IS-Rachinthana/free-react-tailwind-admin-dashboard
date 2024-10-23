import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

interface ClientInformation {
  clientID: number;
  clientName: string;
  clientEmail: string;
  contactNumber: string;
  clientAddress: string;
  clientFiledName: string;
}

const ClientDetailsTable = () => {
  const [clients, setClients] = useState<ClientInformation[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/clientInformation');
        setClients(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch clients');
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);

  const handleInputChange = (index: number, field: keyof ClientInformation, value: string) => {
    setClients(prev => prev.map((item, idx) => idx === index ? {...item, [field]: value} : item));
  };

  const handleUpdateClient = async (client: ClientInformation) => {
    try {
      await axios.put(`http://localhost:3001/api/clientInformation/${client.clientID}`, client);
      Notiflix.Notify.success('Client updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update client');
      console.error('Error updating client:', error);
    }
  };

  const handleDeleteClient = async (clientID: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/clientInformation/${clientID}`);
      Notiflix.Notify.success('Client deleted successfully');
      setClients(clients.filter(client => client.clientID !== clientID));
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete client');
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className=" text-left meta-4">
              <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white'> Client Details Table</th>
            </tr>
            <tr  className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11" >Client ID</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Client Name</th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Client Email</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Contact Number</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Client Address</th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">Client Filed Name</th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
          </tr> 
      </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client.clientID}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{client.clientID}</td>
              <td className="border-b bg-transparent border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  value={client.clientName}
                  className="w-full bg-transparent"
                  onChange={e => handleInputChange(index, 'clientName', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="email"
                  value={client.clientEmail}
                  className="w-full bg-transparent"
                  onChange={e => handleInputChange(index, 'clientEmail', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  value={client.contactNumber}
                  className="w-full bg-transparent"
                  onChange={e => handleInputChange(index, 'contactNumber', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  value={client.clientAddress}
                  className="w-full bg-transparent"
                  onChange={e => handleInputChange(index, 'clientAddress', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  value={client.clientFiledName}
                  className="w-full bg-transparent"
                  onChange={e => handleInputChange(index, 'clientFiledName', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button  className="w-full bg-transparent" onClick={() => handleUpdateClient(client)}>Update</button>
                <button   className="w-full bg-transparent" onClick={() => handleDeleteClient(client.clientID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ClientDetailsTable;
