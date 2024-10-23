import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AdminTable from './pages/UserDetailsTable';
import AdminTablePilot from './pages/PilotDetailsTable';
import JobTable from './pages/JobDetailsTable';
import JobTableClient from './pages/ClientDetailsTable';
import JobTableTransport from './pages/TransportDetailsTable';
import JobTableField from './pages/FieldDetailsTable';

import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
<<<<<<< HEAD
import OpsTable from './pages/DroneDetailsTable';
import OpsTableSpray from './pages/SprayDetailsTable';
import OpsTableFlight from './pages/FlightDetailsTable';
import OpsTableSummary from './pages/SummaryDetailsTable';
import AdminForm from './pages/AdminForm/UserRegistrationForm';
import AdminFormPilot from './pages/AdminForm/PilotRegistrationForm';
import JobForm from './pages/JobForm/JobDetailsForm';
import JobFormClient from './pages/JobForm/ClientRegistrationForm';
import JobFormTransport from './pages/JobForm/TransportRegistrationForm';
import JobFormField from './pages/JobForm/FieldDetailsForm';
import OpsForm from './pages/OpsForm/DroneInfoForm';
import OpsFormFlight from './pages/OpsForm/FlightInfoForm';
import OpsFormSpray from './pages/OpsForm/SprayingInfoForm';
import OpsFormSummary from './pages/OpsForm/SummaryInfoForm';
import DroneCrashForm from './pages/DroneCrashForm/DroneCrashDetailsForm';
=======
import DefaultLayout from './layout/DefaultLayout';
>>>>>>> d382bb4ad107d1f0c5bc96c018f271c05e008389

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />

        <Route
          path="/AdminForm/UserRegistrationForm"
          element={
            <>
              <PageTitle title="UserRegistrationForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AdminForm />
            </>
          }
        />

        
      <Route
          path="/AdminForm/PilotRegistrationForm"
          element={
            <>
              <PageTitle title="PilotRegistrationForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AdminFormPilot />
            </>
          }
        />

      <Route
          path="/JobForm/JobDetailsForm"
          element={
            <>
              <PageTitle title="JobDetailsForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobForm />
            </>
          }
        />

        
      <Route
          path="/JobForm/ClientRegistrationForm"
          element={
            <>
              <PageTitle title="ClientRegistrationForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobFormClient />
            </>
          }
        />

      <Route
          path="/JobForm/TransportRegistrationForm"
          element={
            <>
              <PageTitle title="TransportResgistrationForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobFormTransport />
            </>
          }
        />

      <Route
          path="/JobForm/FieldDetailsForm"
          element={
            <>
              <PageTitle title="FieldDetailsForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobFormField />
            </>
          }
        />

      <Route
          path="/OpsForm/DroneInfoForm"
          element={
            <>
              <PageTitle title="DroneInfoForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsForm />
            </>
          }
        />
        
        <Route
          path="/OpsForm/FlightInfoForm"
          element={
            <>
              <PageTitle title="FlightInfoForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsFormFlight/>
            </>
          }
        />

        <Route
          path="/OpsForm/SprayingInfoForm"
          element={
            <>
              <PageTitle title="SprayingInfoForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsFormSpray />
            </>
          }
        />

        <Route
          path="/OpsForm/SummaryInfoForm"
          element={
            <>
              <PageTitle title="SummaryInfoForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsFormSummary />
            </>
          }
        />

        <Route
          path="/DroneCrashForm/DroneCrashDetailsForm"
          element={
            <>
              <PageTitle title="DroneCrashDetailsForm | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <DroneCrashForm />
            </>
          }
        />
        
        
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        
        <Route
          path="/AdminTable/UserDetailsTable"
          element={
            <>
              <PageTitle title="UserDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AdminTable />
            </>
          }
        />
        
        <Route
          path="/AdminTable/PilotDetailsTable"
          element={
            <>
              <PageTitle title="PilotDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AdminTablePilot />
            </>
          }
        />
        
        <Route
          path="/JobTable/JobDetailsTable"
          element={
            <>
              <PageTitle title="PilotDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobTable />
            </>
          }
        />

         <Route
          path="/JobTable/ClientDetailsTable"
          element={
            <>
              <PageTitle title="ClientDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobTableClient />
            </>
          }
        />
        
        <Route
          path="/JobTable/TransportDetailsTable"
          element={
            <>
              <PageTitle title="TransportDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobTableTransport />
            </>
          }
        />

              <Route
          path="/JobTable/TransportDetailsTable"
          element={
            <>
              <PageTitle title="TransportDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobTableTransport />
            </>
          }
        />
        
        <Route
          path="/JobTable/FieldDetailsTable"
          element={
            <>
              <PageTitle title="FieldDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <JobTableField  />
            </>
          }
        />

        <Route
          path="/OpsTable/DroneDetailsTable"
          element={
            <>
              <PageTitle title="DroneDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsTable />
            </>
          }
        />


        <Route
          path="/OpsTable/SprayDetailsTable"
          element={
            <>
              <PageTitle title="SprayDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsTableSpray />
            </>
          }
        />

        <Route
          path="/OpsTable/FlightDetailsTable"
          element={
            <>
              <PageTitle title="FlightDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsTableFlight />
            </>
          }
        />
        
        <Route
          path="/OpsTable/SummaryDetailsTable"
          element={
            <>
              <PageTitle title="SummaryDetailsTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OpsTableSummary />
            </>
          }
        />
        
        
        
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />


        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
