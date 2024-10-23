import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import TransportDetailsTable from '../components/JobTable/TransportDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const JobTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="JobTable" />

      <div className="flex flex-col gap-10">
       
        <TransportDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default JobTable;