// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//we are creating a smart contract called CrowdFunding
contract CrowdFunding {
    struct Campaign{
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators; // an arrray of address datatype of Solidity
        uint256[] donations; // an array of uint256 datatype of Solidity
    }
    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;
    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(_deadline > block.timestamp, "The deadline should be a date in the future.");
        // require(campaign.deadline > block.timestamp, "The deadline should be a date in the future.");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;
        //msg is sent from frontend

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        //we are pushing the address of the donator to the donators array
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}("");
        //transfering the amount to the owner of the campaign from the current contract
        //https://solidity-by-example.org/payable/

        if(sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
        //view keyword is used to indicate the fuction is read-only and doesn't modify contents
        //address[] donators; // an arrray of address datatype of Solidity
        //uint256[] donations; // an arrray of uint256 datatype of Solidity
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);
        //we are creating an empty array of type Campaign with the length of numberOfCampaigns we have actually created
        //it is in memory because it needs to be destroyed immediately after the function is executed

        for(uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
