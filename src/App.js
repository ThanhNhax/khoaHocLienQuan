import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Home/Header/Header';
function App() {
  return (

    <div className=''>
      <Header />
      {/* Vị trí component sẽ được load ở link con */}
      <Outlet />
    </div>

  );
}

export default App;
