import React, { useState, useEffect } from "react";
import client from "../api";

const Hakkimda = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await client.get(
          "/api/about/?populate=aboutpic"
        );
        console.log("hakımda", result.data.data);
        const newDataAbout = {
          ...result.data.data.attributes
        };
        console.log("newDataAbout", newDataAbout);
        setAbout(newDataAbout);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h1 className="text-dark fw-bold">ERROR...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div
        className="card text-dark bg-light mb-3 mt-5"
        style={{ maxWidth: "100%" }}
      >
        <div className="card-header text-center">
        <img src="https://raw.githubusercontent.com/muslumdogan01/my-blog/master/client/public/images/mus.jpeg" alt="" style={{ maxWidth: "30%" }}/>
    
        </div>
        <div className="card-body">
          <h1 className="alert alert-danger">Hakkımda</h1>
          <h4 className="card-text p-3">{about.aboutHeader}</h4>
          <h4 className="card-text p-3">{about.abouttext}</h4>
          <h3 className="mt-3 fw-bold p-3">Peki ya kişisel özelliklerim neler?</h3>
          <h4 className="card-text mt-2 p-3">{about.hobbies}</h4>
        </div>
      </div>
    </div>
  );
};

export default Hakkimda;
