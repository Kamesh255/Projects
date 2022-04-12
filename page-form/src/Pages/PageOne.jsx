import React, { useContext } from "react";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import "./One.css"

const PageOne = () => {
  const { name, age, dateOfBirth, setState } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="one">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setState({ type: "ChangeName", payload: e.target.value })
        }
      />
       <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) =>
          setState({ type: "ChangeAge", payload: e.target.value })
        }
      />
       <input
        type="date"
        placeholder="Date Of Birth"
        value={dateOfBirth}
        onChange={(e) =>
          setState({ type: "ChangeDateOfBirth", payload: e.target.value })
        }
      />   
      <button 
       disabled={!name && !age && !dateOfBirth}
       onClick={()=>{
           navigate(`/registration/two`);
       }}
       >Next</button>
    </div>
  );
};

export default PageOne;
