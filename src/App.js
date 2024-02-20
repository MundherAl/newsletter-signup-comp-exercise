import './index.css';
import { Routes, Route } from 'react-router-dom';
import Newsletter from './pages/Newsletter'
import Subscribed from './pages/Subscribed'

function App() {
  return (
    <Routes>
      <Route index path='/newsletter-signup-comp-exercise' element={<Newsletter />} />
      <Route path='/subscribed' element={<Subscribed />} />
    </Routes>
  );
}

export default App;
