import './App.css';
import TopBanner from './component/TopBanner/TopBanner';
import Services from './component/Services/Services';
import TopNavigation from './component/TopNavigation/TopNavigation';
import FeatureSection from './component/FeatureSection/FeatureSection';

function App() {
  return (
    <div>
      <TopNavigation />

      <TopBanner />

      <Services />

      <FeatureSection />
    </div>
  );
} 

export default App;
