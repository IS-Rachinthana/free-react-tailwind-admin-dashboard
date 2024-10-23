import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

// Define the structure of the field details data
interface FieldDetails {
  fieldId: number;
  fieldName: string;
  fieldSize: string;
  area: string;
  clientId: string;
  fieldDescription: string;
}

const FieldDetailsTable = () => {
  const [fields, setFields] = useState<FieldDetails[]>([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/fieldDetails');
        setFields(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch field details');
        console.error('Error fetching field details:', error);
      }
    };
    fetchFields();
  }, []);

  const handleInputChange = (index: number, field: keyof FieldDetails, value: string) => {
    setFields(prev => prev.map((item, idx) => idx === index ? {...item, [field]: value} : item));
  };

  const handleUpdateField = async (field: FieldDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/fieldDetails/${field.fieldId}`, field);
      Notiflix.Notify.success('Field detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update field detail');
      console.error('Error updating field detail:', error);
    }
  };

  const handleDeleteField = async (fieldId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/fieldDetails/${fieldId}`);
      setFields(prev => prev.filter(field => field.fieldId !== fieldId));
      Notiflix.Notify.success('Field detail deleted successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete field detail');
      console.error('Error deleting field detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
          <tr className=" text-left meta-4">
              <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white'> Field Details Table</th>
            </tr> 
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {/* Table headers */}
              <th className="py-4 px-4 font-medium text-black dark:text-white">Field ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Field Name</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Field Size</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Area</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Client ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Field Description</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Table data */}
            {fields.map((field, index) => (
              <tr key={field.fieldId}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{field.fieldId}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={field.fieldName}
                    onChange={(e) => handleInputChange(index, 'fieldName', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={field.fieldSize}
                    onChange={(e) => handleInputChange(index, 'fieldSize', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={field.area}
                    onChange={(e) => handleInputChange(index, 'area', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={field.clientId}
                    onChange={(e) => handleInputChange(index, 'clientId', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    className="w-full bg-transparent"
                    value={field.fieldDescription}
                    onChange={(e) => handleInputChange(index, 'fieldDescription', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button onClick={() => handleUpdateField(field)}>Update</button>
                  <button onClick={() => handleDeleteField(field.fieldId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FieldDetailsTable;
