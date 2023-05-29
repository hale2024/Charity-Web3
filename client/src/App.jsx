import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Profile,
  Logout,
} from "./pages";

function App() {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [searchCampaign, setSearchCampaign] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
      setMetamaskInstalled(true);
    } else {
      setMetamaskInstalled(false);
    }
  }, []);

  return (
    <div
      className={`relative sm:-8 p-4 bg-[#e6eaef] min-h-screen flex flex-row`}
    >
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar
          searchFilter={setSearchCampaign}
          metamaskInstalled={metamaskInstalled}
        />

        <Routes>
          <Route path="/" element={<Home searchCampaign={searchCampaign} />} />
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
