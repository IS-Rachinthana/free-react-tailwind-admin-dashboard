import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';


import DatePickerOneForPilot from '../../components/Forms/DatePicker/DatePickerOneForPilot';
import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';



const FormLayout = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        tel: '',
        dob: ''
      });


      const handleSubmit = async (event) => {
        event.preventDefault();
        // You can perform further actions here, such as sending the form data to an API
        const response = await axios.post("http://localhost:3001/api/dronePilots",formData);
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
                Pilot Registration Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="localhost:3001/api/dronePilots" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Pilot Name
                    </label>
                    <input
                      name='name'
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your Pilot Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Pilot Address
                    </label>
                    <input
                      name='address'
                      value={formData.address}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your Address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pilot Contact Number <span className="text-meta-1">*</span>
                  </label>
                  
                  <input
                    name='tel'
                    type="text"
                    value={formData.tel}
                    onChange={handleInputChange}
                    placeholder="Enter your Contact Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                
                <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    Pilot Date of Birth <span className="text-meta-1">*</span>
                  </label>
              <input
                    name='dob'
                    value={formData.dob}
                    onChange={handleInputChange}
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
