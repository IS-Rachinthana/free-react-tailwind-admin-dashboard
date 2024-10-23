import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';

import DatePickerOneForSpray from '../../components/Forms/DatePicker/DatePickerOneForSpray';

import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';


const FormLayout = () => {

  const [formData, setFormData] = useState({
    droneId: '',
    jobId: '',
    cropType: '',
    chemicalType: '',
    sprayingDate: '',
    chemicalQuantity: '',
    volume: '',
    concentration: ''
    
   
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    const response = await axios.post("http://localhost:3001/api/sprayingDetails",formData);
    Notiflix.Notify.success('Spraying Details Added successfully');
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
                Spraying Details Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="localhost:3001/api/sprayingDetails" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Event ID
                    </label>
                    <input
                      type="text"
                      placeholder="Automatically Generate ID (Ex:01112)"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        readOnly
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Drone ID
                    </label>
                    <input
                        name='droneId'
                        type="text"
                        value={formData.droneId}
                        onChange={handleInputChange}
                      placeholder="Enter your Drone ID"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Job ID <span className="text-meta-1">*</span>
                  </label>
                  <input
                    name='jobId'
                    type="text"
                    value={formData.jobId}
                    onChange={handleInputChange}
                    placeholder="Enter your Job ID"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Crop Type
                  </label>
                  <input
                    name='cropType'
                    type="text"
                    value={formData.cropType}
                    onChange={handleInputChange}
                    placeholder="Enter Crop type"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                   Chemical Type
                  </label>
                  <input
                    name='chemicalType'
                    type="text"
                    value={formData.chemicalType}
                    onChange={handleInputChange}
                    placeholder="Enter chemical type"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                
             
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Spraying Date
                  </label>
                  <input
                    name='sprayingDate'
                    type="Date"
                    value={formData.sprayingDate}
                    onChange={handleInputChange}
                    placeholder="Enter Chemical Quantity"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                
               

              <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Chemical Quantity
                  </label>
                  <input
                    name='chemicalQuantity'
                    type="text"
                    value={formData.chemicalQuantity}
                    onChange={handleInputChange}
                    placeholder="Enter Chemical Quantity"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                
              <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Volume
                  </label>
                  <input
                    name='volume'
                    type="text"
                    value={formData.volume}
                    onChange={handleInputChange}
                    placeholder="Enter Volume"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
     
                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Concentration
                  </label>
                  <textarea
                  name='concentration'
                  type="text"
                  value={formData.concentration}
                  onChange={handleInputChange}
                    rows={6}
                    placeholder="Type your Consentration"
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
