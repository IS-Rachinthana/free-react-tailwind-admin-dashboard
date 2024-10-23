import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import DroneDetailsTable from '../components/OpsTable/DroneDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const OpsTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="OpsTable" />

      <div className="flex flex-col gap-10">
       
        <DroneDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default OpsTable;