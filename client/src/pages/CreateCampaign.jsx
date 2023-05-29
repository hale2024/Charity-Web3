import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";
import Caver from "caver-js";
const caver = new Caver("https://rpc.ankr.com/klaytn");

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          name: form.name,
          title: form.title,
          description: form.description,
          target: caver.utils.toPeb(form.target, "KLAY"),
          deadline: form.deadline,
          image: form.image,
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div
      className={`bg-[#EEF2F6] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4`}
    >
      {isLoading && <Loader />}
      <div
        className={`flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#346191] rounded-[10px]`}
      >
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Charity
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="KLAY 0.50"
            inputType="number"
            min="0.01"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
            noticeText={
              "We only accept KLAY as of now; please make sure you are using KLAY in Metamask."
            }
          />

          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <FormField
          labelName="Campaign image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Create New Charity"
            styles={`bg-[#3d8add]`}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
