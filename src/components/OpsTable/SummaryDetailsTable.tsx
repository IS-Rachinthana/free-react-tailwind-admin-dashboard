import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

interface SummaryDetails {
  reportId: number;
  operatorName: string;
  nextSprayingDate: string; // Assuming the date is handled as a string
  issuesFaced: string;
  additionalNotes: string;
  beforeSprayingPicture: string;
  afterSprayingPicture: string;
  recommendations: string;
  addTrRecommendations: string;
}

const SummaryDetailsTable = () => {
  const [summaries, setSummaries] = useState<SummaryDetails[]>([]);

  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/jobSummary');
        setSummaries(response.data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch summary details');
        console.error('Error fetching summary details:', error);
      }
    };
    fetchSummaries();
  }, []);

  const handleInputChange = (index: number, field: keyof SummaryDetails, value: string) => {
    setSummaries(prev => prev.map((item, idx) => idx === index ? { ...item, [field]: value } : item));
  };

  const handleUpdateSummaryDetail = async (summary: SummaryDetails) => {
    try {
      await axios.put(`http://localhost:3001/api/jobSummary/${summary.reportId}`, summary);
      Notiflix.Notify.success('Summary detail updated successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to update summary detail');
      console.error('Error updating summary detail:', error);
    }
  };

  const handleDeleteSummaryDetail = async (reportId: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/jobSummary/${reportId}`);
      setSummaries(prev => prev.filter(detail => detail.reportId !== reportId));
      Notiflix.Notify.success('Summary detail deleted successfully');
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete summary detail');
      console.error('Error deleting summary detail:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
        <tr className=" text-left meta-4">
            <th className='min-w-[180px] py-4 px-4 font-medium text-black dark:text-white'> Job Summary Details Table</th>
          </tr>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Report ID</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Operator Name</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Next Spraying Date</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Issues Faced</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Additional Notes</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Before Spraying Picture</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">After Spraying Picture</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Recommendations</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Additional Recommendations</th>
            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Actions</th>
          </tr>
        </thead>
        <tbody>
          {summaries.map((summary, index) => (
            <tr key={summary.reportId}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{summary.reportId}</td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  value={summary.operatorName}
                  onChange={(e) => handleInputChange(index, 'operatorName', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  value={summary.nextSprayingDate}
                  onChange={(e) => handleInputChange(index, 'nextSprayingDate', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  className="w-full bg-transparent"
                  value={summary.issuesFaced}
                  onChange={(e) => handleInputChange(index, 'issuesFaced', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  className="w-full bg-transparent"
                  value={summary.additionalNotes}
                  onChange={(e) => handleInputChange(index, 'additionalNotes', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  value={summary.beforeSprayingPicture}
                  onChange={(e) => handleInputChange(index, 'beforeSprayingPicture', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  value={summary.afterSprayingPicture}
                  onChange={(e) => handleInputChange(index, 'afterSprayingPicture', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  value={summary.recommendations}
                  onChange={(e) => handleInputChange(index, 'recommendations', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <input
                  type="text"
                  className="w-full bg-transparent"
                  value={summary.addTrRecommendations}
                  onChange={(e) => handleInputChange(index, 'addTrRecommendations', e.target.value)}
                />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <button onClick={() => handleUpdateSummaryDetail(summary)}>Update</button>
                <button onClick={() => handleDeleteSummaryDetail(summary.reportId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  );
};

export default SummaryDetailsTable;
