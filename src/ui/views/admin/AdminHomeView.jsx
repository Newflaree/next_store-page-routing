// Components
import { Building } from '../../components';
// Views
import { AdminLayout } from '../../layouts';


export const AdminHomeView = () => {
  return (
    <AdminLayout
      pageTitle='Dashboard Administrativo'
    >
      <Building />
    </AdminLayout>
  );
}
