import React, { useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashbord from './pages/hotelOwner/Dashbord';
import AddRoom from './pages/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';

const App = () => {
  const location = useLocation();
  const isOwnerPath = useMemo(() => location.pathname.includes('owner'), [location.pathname]);

  return (
    <div>
      {!isOwnerPath && <Navbar />}
     { false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
              <Route path="/rooms/:_undefined" element={<RoomDetails />} />
               <Route path="/my-bookings" element={<MyBookings />} />

               <Route path="/owner/*" element={<Layout />}>
                <Route index element={<Dashbord />} />
                <Route path="add-rooms" element={<AddRoom/>} />
                <Route path="list-rooms" element={<ListRoom/>}/>
                

                
               </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
