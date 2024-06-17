// Components
import { Building } from '@/ui/components';
// Views
import { AdminLayout } from '@/ui/layouts';


export const AdminHomeView = () => {
  return (
    <AdminLayout
      pageTitle='Dashboard Administrativo'
    >
      <Building />
    </AdminLayout>
  );
}
