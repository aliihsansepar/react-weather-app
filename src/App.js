import './assets/css/reset.css';
import './assets/css/tailwind.css';
import './assets/css/body.css';
import CardSection from './components/CardSection.js';

export default function App() {
  return (
    <div className="h-screen relative body-bg">
      <CardSection />
    </div>
  );
}