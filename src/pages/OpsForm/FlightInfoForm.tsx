import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';

import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
const FormLayout = () => {

  const [formData, setFormData] = useState({
    droneID: '',
    flightStartTime: '',
    flightEndTime: '',
    totalFlightDuration: ''
   
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    const response = await axios.post("http://localhost:3001/api/flightInformation",formData);
    Notiflix.Notify.success('Flight Information  Added successfully');
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
               Flight Information Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="localhost:3001/api/flightInformation" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Flight ID
                    </label>
                    <input
                      type="text"
                      placeholder="Automatically Generated Flight ID (Ex: 0112)"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    readOnly
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Drone ID
                    </label>
                    <input
                       name='droneID'
                       type="text"
                       value={formData.droneID}
                       onChange={handleInputChange}
                      placeholder="Enter Drone ID"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Flight Start Time <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='flightStartTime'
                     type="time"
                     value={formData.flightStartTime}
                     onChange={handleInputChange}
                    placeholder="Enter Flight Start Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Flight End Time <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='flightEndTime'
                     type="time"
                     value={formData.flightEndTime}
                     onChange={handleInputChange}
                    placeholder="Enter Flight End Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                 
                 />
                </div>


                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Total Flight Duration <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='totalFlightDuration'
                     type="text"
                     value={formData.totalFlightDuration}
                     onChange={handleInputChange}
                    placeholder="Enter Total Flight Duration"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                 />
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
