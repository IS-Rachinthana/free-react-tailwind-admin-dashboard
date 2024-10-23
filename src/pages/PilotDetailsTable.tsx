import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import PilotDetailsTable from '../components/AdminTable/PilotDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const AdminTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="AdminTable" />

      <div className="flex flex-col gap-10">
       
        <PilotDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default AdminTable;