import React, { useEffect, useReducer } from 'react'
 

export const Context = React.createContext()

const initState = {
    name:"",
    age:"",
    dateOfBirth:"",
    stateOfResidence:"",
    address:"",
    pincode:""
};
function reducer(state, action){
    switch(action.type){
        case "ChangeName":
             return{...state, name: action.payload};
        case "ChangeAge":
            return{...state, age: action.payload};
        case "ChangeDateOfBirth":
            return{...state, dateOfBirth: action.payload};
        case "ChangeStateOfResidence":
            return{...state, stateOfResidence: action.payload};
        case "ChangeAddress":
            return{...state, address: action.payload};
        case "ChangePincode":
             return{...state, pincode: action.payload};
        default:
             throw new Error()
    }
}

export function ContextProvider({children}){
    const [state, setState] = useReducer(reducer,initState);

    const handleSubmit =()=>{
        fetch(`http://localhost:3001/users`,{
            method :"POST",
            body : JSON.stringify(state),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((res) => res.json())
        .then(()=> {})
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{
        console.log(state);
    },[state]);
    
    const {name, age, dateOfBirth, stateOfResidence,address, pincode}= state;
    return(
         <Context.Provider 
            value={{
                name,
                age,
                dateOfBirth,
                stateOfResidence,
                address,
                pincode,
                setState,
                handleSubmit
            }}>
                {children}
         </Context.Provider>
    )
}
  