import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  </UserContextProvider>
  );
}

export default App;
