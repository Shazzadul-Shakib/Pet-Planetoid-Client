import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import VetInfo from "../../Components/VetInfo/VetInfo";
import Loader from "../../Components/Shared/Loader/Loader";

const ShelterRescue = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get("https://pet-planetoid-server.vercel.app/get-vetinfo")
      .then((response) => {
        setData(response.data);
        setLoading(false); // Set loading to false on successful data fetch
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Helmet to change title over browser */}
      <Helmet>
        <title>Pet Planetoid | Shelter&Rescue</title>
      </Helmet>
      <div className="mx-5 grid grid-cols-1 gap-5 my-5 md:grid-cols-2 ">
        {loading ? (
          <Loader />
        ) : (
          data.map((info) => <VetInfo key={info.id} data={info} />)
        )}
      </div>
    </div>
  );
};

export default ShelterRescue;
