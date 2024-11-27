import './App.css';
import {
  Footer,
  HeroSection,
  NavBar,
  FAQSection,
  ComparisonSection,
  FeaturesSection,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-[#071624]">
      <NavBar />
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
