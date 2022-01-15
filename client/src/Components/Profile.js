import React, { useState, useEffect } from "react";
import axios from "axios";


const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const profileResult = await axios.get(
          "http://localhost:1337/api/upload/files"
        );
        console.log("home", profileResult.data[0]);
        setProfile(profileResult.data[0]);
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
          <h1 className="">
            Hi, I am Müslüm, <br /> Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div>
            <button type="button" class="btn btn-danger btn-md">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex p-5 justify-content-center align-self-center">
          <div className="text-center">
            <img className="rounded" alt="..." />
            naber
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
