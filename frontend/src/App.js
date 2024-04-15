import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Business from "./component/Business"
import Organisation from "./component/Organisation"
import Notif from "./component/Notif"
import Saved from "./component/Saved"
import Regis from "./component/Regis"
import Login1 from "./component/Login1"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BuzState from "./context/BuzState";
import Profile from "./component/Profile";
import React, { lazy, Suspense } from 'react';
import ShopTemp from "./component/Shop_Temp"; 
import InstituteTemp from "./component/Institute_Temp";

import UserState from "./context/UserState";
import InsState from "./context/InsState";
import EveState from "./context/EveState";
import SpotLight from "./component/SpotLight";
const AddEvents = lazy(() => import('./component/AddEvents'));
const STemp2 = lazy(() => import('./component/Forms/Shops/temp2/STemp2'));
const InstituteChoices = lazy(() => import('./component/Choices/InstitutesTemplates'));
const STemp1 = lazy(() => import('./component/Forms/Shops/temp1/STemp1'));
const ShopChoices = lazy(() => import('./component/Choices/ShopChoices'));
const ITemp1 = lazy(() => import('./component/Forms/Institutes/temp1/ITemp1'));

function App() { 
  return (
    <>
      <BuzState>
        <UserState>
          <InsState>
            <EveState>
        <BrowserRouter>
          <Navbar title="Spotlight" />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />}>
                <Route index element={<Home />} />
              </Route>
              <Route exact path="/Business" element={<Business />} />
              <Route exact path="/Organisation" element={<Organisation />} />
              <Route exact path="/SpotLight" element={<SpotLight/>} />
              <Route exact path="/Saved" element={<Saved />} />
              <Route exact path="/Notif" element={<Notif />} />
              <Route exact path="/SignUp" element={<Regis />} />
              <Route exact path="/Login" element={<Login1 />} />
              <Route exact path="/Profile" element={<Profile />} />
              <Route exact path="/ShopChoice" element={<ShopChoices />} />
              <Route exact path="/instiChoice" element={<InstituteChoices />} />
              <Route exact path="/addEvent" element={<AddEvents/>} />
              <Route exact path="/ShopTemp1" element={<STemp1 />} />
              <Route exact path="/ShopTemp2" element={<STemp2/>} />
              <Route exact path="/ITemp1" element={<ITemp1 />} />
              <Route path="/shop-temp/:tempType" element={<ShopTemp />} />
              <Route path="/institute-temp/:tempType" element={<InstituteTemp />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        </EveState>
        </InsState>
        </UserState>
      </BuzState>
    </>
  );
}

export default App;