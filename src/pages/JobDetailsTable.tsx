import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import JobDetailsTable from '../components/JobTable/JobDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const JobTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="JobTable" />

      <div className="flex flex-col gap-10">
       
        <JobDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default JobTable;