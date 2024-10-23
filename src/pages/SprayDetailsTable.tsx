import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import SprayDetailsTable from '../components/OpsTable/SprayDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const OpsTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="OpsTable" />

      <div className="flex flex-col gap-10">
       
        <SprayDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default OpsTable;