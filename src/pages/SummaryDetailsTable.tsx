import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import SummaryDetailsTable from '../components/OpsTable/SummaryDetailsTable';
import DefaultLayout from '../layout/DefaultLayout';


const OpsTable = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="OpsTable" />

      <div className="flex flex-col gap-10">
       
        <SummaryDetailsTable />
      </div>
    </DefaultLayout>
  );
};

export default OpsTable;