import React from "react";
import '.././index.css';

import Login from ".././VisitorCount/login.js";
import { Route, Routes } from "react-router";
import Dashboard from ".././VisitorCount/dashboard.js";
import Home from ".././DivSectionScroller/index.js";
import Draw from ".././Draw/index.js";

import Target from ".././DivSectionScroller/Target.js";
import ScrollFixedOneSide from ".././DivScrollWithOneSideFixed/index.js";
import Horizonscroll from ".././HorizontalScroller copy/horizonscroll.js";
import FormInput from ".././FormInput/index.js";
import APITester from ".././API/index.js";
import Fullpage from ".././Fullpage";

import { RequireAuth } from ".././AuthenticationTest/authContext.js";
import AdminLogin from ".././AuthenticationTest/Login.js";
import Component from ".././V0_IntegratedUX/index.js";
import Cart from ".././Cart/Cart.js";
import ProductDetails from ".././Cart/ProductDetails.js";
import Navs from "../Navs.js";

const Homes = () => <h1>Home (Public)</h1>;
const Pricing = () => <h1>Pricing (Public)</h1>;

const Dashboards = () => <h1>Dashboard (Private)</h1>;
const Settings = () => <h1>Settings (Private)</h1>;



const RouterComponent = () => {
  const sections = ['purple', 'red', 'green', 'yellow', 'pink', 'blue', 'violet']
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Navs />} />
        <Route path="target" element={<Target />} />
        <Route path="admin" element={<Login />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="scrollTest" element={<Home />} />
        <Route path="testscroller" element={<ScrollFixedOneSide />} />
        <Route path="horizonscroll" element={<Horizonscroll />} />
        <Route path="form" element={<FormInput />} />
        <Route path="api" element={<APITester />} />
        <Route path="fullpage" element={<Fullpage />} />

        <Route path="v0" element={<Component />} />

        <Route path="auth" element={<Homes />} />
        <Route path="auth/pricing" element={<Pricing />} />
        <Route path="auth/dashboard" element={<RequireAuth><Dashboards /> </RequireAuth>} />
        <Route path="auth/settings" element={<RequireAuth>  <Settings /> </RequireAuth>} />
        <Route path="auth/login" element={<AdminLogin />} />

        <Route path="draw" element={<Draw />} />
        <Route path="shop">
          <Route path="/shop" element={<Cart />} />
          <Route path="/shop/products/:id" element={<ProductDetails />} />
          
        </Route>


        <Route path="*" element={<div>NOT FOUND [GLOBAL]</div>} />

      </Routes>
    </div >

  )
}

export default RouterComponent