// Database
import { homeProducts } from '../database';
// Views
import { HomeView } from '../ui/views';


const HomePage = () => {
  return <HomeView products={ homeProducts } />
}

export default HomePage;
