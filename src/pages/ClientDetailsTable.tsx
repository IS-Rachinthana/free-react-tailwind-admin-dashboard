import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import ClientDetailsTable from '../components/JobTable/ClientDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const JobTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="JobTable" />

      <div className="flex flex-col gap-10">
       
        <ClientDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default JobTable;