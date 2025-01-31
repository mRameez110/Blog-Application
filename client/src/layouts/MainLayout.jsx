import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
