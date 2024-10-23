import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

// Define the structure of the job details data
interface JobDetails {
  jobId: number;
  inventoryId: string;
  jobStartDate: string;
  fieldLocation: string;
  companyProjectName: string;
  fieldType: string;
  jobDescription: string;
}

const JobDetailsTable = () => {
  const [jobDetails, setJobDetails] = useState<JobDetails[]>([]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/jobDetails');
        setJobDetails(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch job details');
        console.error('Error fetching job details:', error);
      }
    };
    fetchJobDetails();
  }, []);

  const handleInputChange = (index: number, field: keyof JobDetails, value: string) => {
    setJobDetails(prev => prev.map((item, idx) => idx === index ? {...item, [field]: value} : item));
  };

  const handleUpdateJobDetail = async (job: JobDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/jobDetails/${job.jobId}`, job);
      Notiflix.Notify.success('Job detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update job detail');
      console.error('Error updating job detail:', error);
    }
  };

  const handleDeleteJobDetail = async (jobId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/jobDetails/${jobId}`);
      Notiflix.Notify.success('Job detail deleted successfully');
      setJobDetails(jobDetails.filter(job => job.jobId !== jobId));
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete job detail');
      console.error('Error deleting job detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
          <tr className=" text-left meta-4">
              <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white'> Job Details Table</th>
            </tr>

            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Job ID</th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Inventory ID</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Job Start Date</th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">Field Location</th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">Company Project Name</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Field Type</th>
              <th className="min-w-[250px] py-4 px-4 font-medium text-black dark:text-white">Job Description</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobDetails.map((job, index) => (
              <tr key={job.jobId}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{job.jobId}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    value={job.inventoryId}
                    className="w-full bg-transparent"
                    onChange={e => handleInputChange(index, 'inventoryId', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    value={job.jobStartDate}
                    className="w-full bg-transparent"
                    onChange={e => handleInputChange(index, 'jobStartDate', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    value={job.fieldLocation}
                    className="w-full bg-transparent"
                    onChange={e => handleInputChange(index, 'fieldLocation', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    value={job.companyProjectName}
                    className="w-full bg-transparent"
                    onChange={e => handleInputChange(index, 'companyProjectName', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    value={job.fieldType}
                    className="w-full bg-transparent"
                    onChange={e => handleInputChange(index, 'fieldType', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <input
                    type="text"
                    value={job.jobDescription}
                    className="w-full bg-transparent"
                    onChange={e => handleInputChange(index, 'jobDescription', e.target.value)}
                  />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button className="hover:text-primary"  onClick={() => handleUpdateJobDetail(job)}>Update</button>
                  <button className="hover:text-primary" onClick={() => handleDeleteJobDetail(job.jobId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetailsTable;
