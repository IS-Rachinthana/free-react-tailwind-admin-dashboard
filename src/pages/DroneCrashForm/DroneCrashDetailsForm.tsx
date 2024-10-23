import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
import DatePickerOneNextSpray from '../../components/Forms/DatePicker/DatePickerOneForNextSpray';

const FormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Drone Crash Details Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Crash ID
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Crash ID"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Operator Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Operator Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>


                
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Drone Pilot ID
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Drone Pilot ID"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Drone Id
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Drone ID"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>


            

              <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Crash Problem
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your problem"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Additional Notes
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your Additional Notes"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

              <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Damage Drone Item List
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type Damage Drone Item List"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
    
                <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Drone Crash Picture
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
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
