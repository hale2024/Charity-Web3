import { useDisconnect } from "@thirdweb-dev/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const disconnect = useDisconnect();
  const navigate = useNavigate();

  useEffect(() => {
    disconnect();
    navigate("/");
  }, []);

  return (
    <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
      Logging out <br /> Please wait a moment!
    </h1>
  );
};

export default Logout;
