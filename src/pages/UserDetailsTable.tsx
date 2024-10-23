import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import UserDetailsTable from '../components/AdminTable/UserDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const AdminTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="AdminTable" />

      <div className="flex flex-col gap-10">
       
        <UserDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default AdminTable;

