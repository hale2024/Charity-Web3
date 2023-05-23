import React, { useState, useEffect } from "react";
import { DisplayCampaigns, Navbar } from "../components";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [searchCampaign, setSearchCampaign] = useState("");
  const [fileToFilter, setFileToFilter] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setFileToFilter(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
    if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
      setMetamaskInstalled(true);
    } else {
      setMetamaskInstalled(false);
    }
  }, [address, contract]);

  useEffect(() => {
    if (searchCampaign.trim().length > 0) {
      const filtered = campaigns.filter((campaign) => {
        return campaign.title
          .toLowerCase()
          .includes(searchCampaign.toLowerCase());
      });
      setFileToFilter(filtered);
    } else {
      setFileToFilter([...campaigns]);
    }
  }, [searchCampaign]);

  return (
    <>
      <Navbar
        searchFilter={setSearchCampaign}
        metamaskInstalled={metamaskInstalled}
      />
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={fileToFilter}
      />
    </>
  );
};

export default Home;
