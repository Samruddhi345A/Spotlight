import Navbar from "./Navbar";
import SearchAndMenu from "./SearchAndMenu";
import Home from "./Home";
import Business from "./Business"
import Organisation from "./Organisation"
import Notif from "./Notif"
import Saved from "./Saved"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'

export class Routs extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
                    <Navbar title="Spotlight" />
                    <SearchAndMenu />
                    <Routes>
                        <Route exact path="/Home" element={<Home />}></Route>
                        <Route index element={<Home />} />
                        <Route exact path="/Business" element={<Business />} />
                        <Route exact path="/Organisation" element={<Organisation />} />
                        <Route exact path="/Saved" element={<Saved />} />
                        <Route exact path="/Notif" element={<Notif />} />
                    </Routes>
                </BrowserRouter>
      </div>
    )
  }
}

export default Routs
