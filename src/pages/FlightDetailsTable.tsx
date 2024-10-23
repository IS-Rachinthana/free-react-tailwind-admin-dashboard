import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import FlightDetailsTable from '../components/OpsTable/FlightDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const OpsTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="OpsTable" />

      <div className="flex flex-col gap-10">
       
        <FlightDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default OpsTable;