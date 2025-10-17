import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {

    const [captain, setCaptain] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (CaptainData) =>{
        setCaptain(CaptainData);
    };


  const value ={
    captain,
    setCaptain,
    isloading,
    setIsLoading,
    error,
    setError,
    updateCaptain
  };

  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};


export default CaptainContext;
