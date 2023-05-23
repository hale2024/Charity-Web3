import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  Logout,
} from "./pages";
import { palette } from "./constants";

function App() {
  return (
    <div
      className={`relative sm:-8 p-4 bg-[${palette.background.main}] min-h-screen flex flex-row`}
    >
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
