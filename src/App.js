import './App.css';
import TopBanner from './component/TopBanner/TopBanner';
import Services from './component/Services/Services';
import TopNavigation from './component/TopNavigation/TopNavigation';
import FeatureSection from './component/FeatureSection/FeatureSection';
import OurProduct from './component/OurProduct/OurProduct';

function App() {
  return (
    <div>
      <TopNavigation />

      <TopBanner />

      <Services />

      <FeatureSection />

      <OurProduct />
    </div>
  );
} 

export default App;
