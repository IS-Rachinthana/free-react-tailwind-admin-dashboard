import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
<<<<<<< HEAD
import LogoDark from '../../images/logo/drone-svgrepo-com.svg';
import Logo from '../../images/logo/drone-svgrepo-com.svg';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
=======
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In" />
>>>>>>> d382bb4ad107d1f0c5bc96c018f271c05e008389

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const credentials = {
      userEmail: email,
      userPassword: password
    };

    try {
      const response = await axios.post('http://localhost:3001/login', credentials);
      if (response.data && response.data.message === "SUCCESS" && response.data.token) {
          // console.log('Success:', response.data);
          // Store token in sessionStorage
          sessionStorage.setItem('token', response.data.token);
          
          if(response.data.role=="admin"){
            window.location.replace("/");
          }
          else{
            window.location.replace('/OpsForm/DroneInfoForm');
          }
          Swal.fire({
              title: 'Success!',
              text: `Form submitted successfully!`,
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Great!'
          });
      } else {
          console.error('Unexpected success response:', response);
          Swal.fire({
              title: 'Oops...',
              text: 'Form submitted, but the response was unexpected. Please check the details.',
              icon: 'warning',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
          });
      }
  } catch (error) {
      console.error('Error submitting form:', error);
      let errorMessage = 'Error submitting form. Please try again.';
      if (error.response) {
          if (error.response.status === 401) {
              errorMessage = 'Incorrect username or password.';
          } else {
              errorMessage += ` Error: ${error.response.statusText} (${error.response.status})`;
          }
      } else if (error.request) {
          errorMessage += ' No response was received from the server.';
      } else {
          errorMessage += ` ${error.message}`;
      }
      Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
      });
  }

  };

  return (
    <div>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-22 px-26 text-center">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Hi-Tech Agricultural Drone Monitoring System 
              </h2>
              <p className="2xl:px-20">
                Revolutionary drone technology for advanced agricultural monitoring and management.
              </p>
              <span className="mt-15 inline-block">
                <Link to="http://127.0.0.1:5174/" className="mb-5.5 inline-block">
                  <img className="hidden dark:block" src={Logo} alt="Logo" />
                  <img className="dark:hidden" src={LogoDark} alt="Logo" />
                </Link>
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Begin Your System Experience</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to Admin
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="absolute right-4 top-4"></span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="absolute right-4 top-4"></span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{' '}
                    <Link to="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> d382bb4ad107d1f0c5bc96c018f271c05e008389
  );
};

export default SignIn;
