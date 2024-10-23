import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import FieldDetailsTable from '../components/JobTable/FieldDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const JobTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="JobTable" />

      <div className="flex flex-col gap-10">
       
        <FieldDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default JobTable;