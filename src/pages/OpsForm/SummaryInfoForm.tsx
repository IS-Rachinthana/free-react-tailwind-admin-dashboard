import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
import DatePickerOneNextSpray from '../../components/Forms/DatePicker/DatePickerOneForNextSpray';

import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

const FormLayout = () => {


  
  const [formData, setFormData] = useState({
    operatorName: '',
    nextSprayingDate: '',
    issuesFaced: '',
    additionalNotes: '',
    beforeSprayingPicture: '',
    afterSprayingPicture: '',
    recommendations: '',
    addTrRecommendations: ''
    
   
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    const response = await axios.post("http://localhost:3001/api/jobSummary",formData);
    Notiflix.Notify.success('Job Summary Added successfully');
    window.location.reload();
    console.log('Form submitted with data:', formData);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Pilot's job Summary Details Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="localhost:3001/api/jobSummary" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Report ID
                    </label>
                    <input
                      
                       type="text"
                     
                      placeholder="Enter Report ID"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    readOnly
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Operator Name
                    </label>
                    <input
                       name='operatorName'
                       type="text"
                       value={formData.operatorName}
                       onChange={handleInputChange}
                      placeholder="Enter Operator Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Next Spraying Date <span className="text-meta-1">*</span>
                  </label>
                  <input
                   
                   name='nextSprayingDate'
                   type="date"
                   value={formData.nextSprayingDate}
                   onChange={handleInputChange}
                   
                    
                    placeholder="Enter Transport Date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
             



              <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Issues Faced
                  </label>
                  <textarea
                   name='issuesFaced'
                   value={formData.issuesFaced}
                   onChange={handleInputChange}
                    rows={6}
                    placeholder="Type your Issues"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Additional Notes
                  </label>
                  <textarea
                   name='additionalNotes'
                   value={formData.additionalNotes}
                   onChange={handleInputChange}
                    rows={6}
                    placeholder="Type your Additional Notes"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                   
              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Before Spraying Picture
                </label>
                <input
                   name='beforeSprayingPicture'
                   type="file"
                   value={formData.beforeSprayingPicture}
                   onChange={handleInputChange}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>


              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  After Spraying Picture
                </label>
                <input
                   name='afterSprayingPicture'
                   type="file"
                   value={formData.afterSprayingPicture}
                   onChange={handleInputChange}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Recommendations
                  </label>
                  <textarea
                   name='recommendations'
                   value={formData.recommendations}
                   onChange={handleInputChange}
                    rows={6}
                    placeholder="Type your Recommendations"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>


                
              <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                  Additional Treatment Recommendation
                  </label>
                  <textarea
                   name='addTrRecommendations'
                   value={formData.addTrRecommendations}
                   onChange={handleInputChange}
                    rows={6}
                    placeholder="Type Additional Treatment Recommendation"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
              

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
