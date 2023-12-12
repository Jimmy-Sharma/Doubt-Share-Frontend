import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast'
import { MainRoutes } from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <Toaster />
    </div>
  );
}

export default App;
