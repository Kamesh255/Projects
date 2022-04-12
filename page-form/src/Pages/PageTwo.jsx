import React, { useContext } from "react";
import { Context } from "../Context/Context.jsx";
import { Navigate } from "react-router-dom";

const PageTwo = () => {
  const {
    name,
    age,
    dateOfBirth,
    stateOfResidence,
    address,
    pincode,
    setState,
    handleSubmit,
  } = useContext(Context);

  if (!name || !age || !dateOfBirth) {
    return <Navigate to="/registration/one" />;
  }
  return (
    <div className="one">
      <input
        type="text"
        placeholder="State Of Residence"
        value={stateOfResidence}
        onChange={(e) =>
          setState({ type: "ChangeStateOfResidence", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) =>
          setState({ type: "ChangeAddress", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) =>
          setState({ type: "ChangePincode", payload: e.target.value })
        }
      />
      <button
        disabled={
          !stateOfResidence ||
          !address ||
          !pincode ||
          !name ||
          !age ||
          !dateOfBirth
        }
        onClick={handleSubmit} 
        
      > 
        Submit
      </button>
    </div>
  );
};

export default PageTwo;
