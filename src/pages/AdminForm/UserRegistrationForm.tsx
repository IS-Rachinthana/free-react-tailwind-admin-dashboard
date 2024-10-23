
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

import SelectGroupOneForUser from '../../components/Forms/SelectGroup/SelectGroupOneForUser';
import DefaultLayout from '../../layout/DefaultLayout';

import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

const FormLayout = () => {


  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    userEmail: '',
    userPassword: '',
    userRole: '',
    userAddress: '',
    userContactNum: ''
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    const response = await axios.post("http://localhost:3001/registration",formData);
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
                System User Registration Form
              </h3>
            </div> 

            <form onSubmit={handleSubmit} action="localhost:3001/registration" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      User Name
                    </label>
                    <input
                      name='userName'
                      type="text"
                      value={formData.userName}
                      onChange={handleInputChange}
                      placeholder="Enter your Pilot Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  

                  
                  <div className="w-full xl:w-1/2">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    User Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                      name='userEmail'
                      type="text"
                      value={formData.userEmail}
                      onChange={handleInputChange}
                      placeholder="Enter your Pilot Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                </div>

                
                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                     User Address
                    </label>
                    <input
                      name='userAddress'
                      type="text"
                      value={formData.userAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your Pilot Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                </div>
             

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                      name='userPassword'
                      type="text"
                      value={formData.userPassword}
                      onChange={handleInputChange}
                      placeholder="Enter your Pilot Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>

                
                <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                     User Contact Number
                    </label>
                    <input
                      name='userContactNum'
                      type="text"
                      value={formData.userContactNum}
                      onChange={handleInputChange}
                      placeholder="Enter your Pilot Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
              
                
              

                  <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    User Role <span className="text-meta-1">*</span>
                  </label>
              <select
                    name='userRole'
                    value={formData.userRole}
                    onChange={handleInputChange}

                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                  <option value="" disabled className="text-body dark:text-bodydark">
        Select Your Field Type
          </option>
          <option value="Administrator" className="text-body dark:text-bodydark">
          Administrator
          </option>
          <option value="Project Manager" className="text-body dark:text-bodydark">
          Project Manager
          </option>
          <option value="Drone Pilot" className="text-body dark:text-bodydark">
          Drone Pilot
          </option>
         
        </select> 
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
