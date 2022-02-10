import React, { useState, useEffect } from "react";
import client from "../api";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const profileResult = await client.get(
          "/api/blog-data/?populate=profileImage"
        );
        console.log(
          "home",
          profileResult.data.data.attributes.profileImage.data.attributes.url
        );

   
        const newData = {
          ...profileResult.data.data.attributes,
          // profileImage: `${client}${profileResult.data.data.attributes.profileImage.data.attributes.url}`,
        };
        // console.log(`newData`, newData);
        setProfile(newData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);



  return (
    <div className="container ">
      <div className="row ">
        <div className="col-md-6 p-3 p-md-5 ">
          <h1 className="fw-bold">
            {profile.profileTextFirst} <br />
            {profile.profileSecontText}
          </h1>
          <p>
            {profile.profileSubHeader}
          </p>
          <div>
            <Link to={`/Hakkimda`}>
            <button type="button" className="btn btn-danger btn-md">
              Hakkımda daha fazlası   <AiOutlineArrowRight /> 
            </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-flex p-5 justify-content-center align-self-center">
          <div className="text-center">
            <img
              src="https://raw.githubusercontent.com/muslumdogan01/my-blog/master/client/public/images/muslum.jpg"
              id="profile_photo"
              className="img-fluid img-thumbnail"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
