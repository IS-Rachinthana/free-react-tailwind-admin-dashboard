import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
import DatePickerOneForDeparture from '../../components/Forms/DatePicker/DatePickerOneForDeparture';
import DatePickerOneForStart from '../../components/Forms/DatePicker/DatePickerOneForStart';


import { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

const FormLayout = () => {

  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleNumberPlate: '',
    startTime: '',
    departureTime: '',
    mileage: '',
    transportDate: '',
    pilotId: ''
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    const response = await axios.post("http://localhost:3001/api/transportationDetails",formData);
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
                Drone Transport Details Form
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="localhost:3001/api/transportationDetails" method='POST'>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Vehicle Type
                    </label>
                    <input
                       name='vehicleType'
                       type="text"
                       value={formData.vehicleType}
                       onChange={handleInputChange}
                      placeholder="Enter Vehicle Type"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Vehicle Number Plate
                    </label>
                    <input
                      name='vehicleNumberPlate'
                      type="text"
                      value={formData.vehicleNumberPlate}
                      onChange={handleInputChange}
                      placeholder="Enter Vehicle Number Plate"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

               
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Start Time <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='startTime'
                     type="time"
                     value={formData.startTime}
                     onChange={handleInputChange}
                    placeholder="Enter Start Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Departure Time <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='departureTime'
                     type="time"
                     value={formData.departureTime}
                     onChange={handleInputChange}
                    placeholder="Enter Departure Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Transport Date <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='transportDate'
                     type="date"
                     value={formData.transportDate}
                     onChange={handleInputChange}
                    placeholder="Enter Transport Date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Mileage <span className="text-meta-1">*</span>
                  </label>
                  <input
                     name='mileage'
                     type="text"
                     value={formData.mileage}
                     onChange={handleInputChange}
                    placeholder="Enter Mileage"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>



            

              <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pilot ID
                  </label>
                  <input
                    name='pilotId'
                    type="text"
                    value={formData.pilotId}
                    onChange={handleInputChange}
                    placeholder="Enter Pilot ID"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

              
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Subbmit Form
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
