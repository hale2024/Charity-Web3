import React, { useState, useEffect } from "react";
import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Home = ({ searchCampaign }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [fileToFilter, setFileToFilter] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setFileToFilter(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
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
      <header className="py-4">
        <div className="container mx-auto">
          <h1 className="font-epilogue font-bold text-gray-700 text-2xl text-center">
            SUPPORT ETHIOPIA
          </h1>
        </div>
      </header>
      <DisplayCampaigns
        title="All Charities"
        isLoading={isLoading}
        campaigns={fileToFilter}
      />
    </>
  );
};

export default Home;
