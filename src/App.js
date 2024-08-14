import './App.css';
import MyLogin from './components/MyLogin';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Detail';
import SignUp from './components/SignUp';
import Honeymoon from './components/HoneyMoon';
import { UserProvider } from './components/UserContext';
import GroupTour from './components/GroupTour';
import HoneyDetail from './components/HoneyDetail';
import EnquiryForm from './components/EnquiryForm';
import GroupDetail from './components/GroupDetail';
import React from "react";
import ChatBot from "./components/chatbot/ChatBot.jsx";
import Review from './components/Review.jsx';

const route=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<MyLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/honeymoon" element={<Honeymoon />} />
      <Route path="/tours/:id" element={<Details />} />
      <Route path="/coupletours/:id" element={<HoneyDetail />} />
      <Route path="/grouptour/:id" element={<GroupDetail />} />
      <Route path="/grouptour" element={<GroupTour/>} />
      <Route path="/contact" element={<EnquiryForm/>} />
      <Route path="/mybot" element={<ChatBot/>} />
      <Route path="/review" element={<Review/>} />
    </Route>
  )
)
const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={route} />
    </UserProvider>
  );
};

export default App;
