import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../../layout/DefaultLayout';

import SelectGroupOneForJob from '../../components/Forms/SelectGroup/SelectGroupOneForJob';
import DatePickerOneForJob from '../../components/Forms/DatePicker/DatePickerOneForJob';

import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';


const FormLayout = () => {

  
  const [formData, setFormData] = useState({
    inventoryId: '',
    fieldLocation: '',
    companyProjectName: '',
    jobStartDate: '',
    fieldType: '',
    jobDescription: ''
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    const response = await axios.post("http://localhost:3001/api/jobDetails",formData);
    Notiflix.Notify.success('Pilot Added successfully');
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
                Job Details Registration Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="localhost:3001/api/jobDetails" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                     Inventory ID
                    </label>
                    <input
                      name='inventoryId'
                      type="text"
                      value={formData.inventoryId}
                      onChange={handleInputChange}
                      placeholder="Enter Inventory ID"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Field Location
                    </label>
                    <input
                     name='fieldLocation'
                     type="text"
                     value={formData.fieldLocation}
                     onChange={handleInputChange}
                      placeholder="Enter Your Field Location"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Company Project Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='companyProjectName'
                     type="text"
                     value={formData.companyProjectName}
                     onChange={handleInputChange}
                    placeholder="Enter your Company Project Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                
                
                <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    Job Start Date <span className="text-meta-1">*</span>
                  </label>
              <input
                    name='jobStartDate'
                    value={formData.jobStartDate}
                    onChange={handleInputChange}
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
              </div>


                <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    Field Type <span className="text-meta-1">*</span>
                  </label>
              <select
                    name='fieldType'
                    value={formData.fieldType}
                    onChange={handleInputChange}

                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                  <option value="" disabled className="text-body dark:text-bodydark">
        Select Your Field Type
          </option>
          <option value="Paddy Field" className="text-body dark:text-bodydark">
          Paddy Field
          </option>
          <option value="Coconut Field" className="text-body dark:text-bodydark">
          Coconut Field
          </option>
          <option value="SugarChane" className="text-body dark:text-bodydark">
          SugarChane
          </option>
          <option value="Rubber" className="text-body dark:text-bodydark">
          Rubber
          </option>
          <option value="Tea Estate" className="text-body dark:text-bodydark">
          Tea Estate
          </option>
        </select> 
              </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Job Description
                  </label>
                  <textarea
                  name='jobDescription'
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                    rows={6}
                    placeholder="Type your message"
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
