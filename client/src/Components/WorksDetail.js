import React, { useState, useEffect } from "react";
import client from "../api";
import { useParams } from "react-router-dom";

const WorksDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataworks() {
      setLoading(true);
      try {
        const res = await client.get(`/api/works/${id}`);
        console.log("gör", res.data.data.attributes);
        setDetail(res.data.data.attributes);

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchDataworks();
  }, [id]);

  return (
    <div className="container">
      <div className="row py-5">
        <div class="card p-3" key={detail.id}>
          <div class="card-header">
            <h1>{detail.title}</h1>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{detail.description}</p>
              <footer class="blockquote-footer">
                <p>{detail.name}</p>
                <a className="link-primary" href="https://github.com/muslumdogan01/Twitter-clone-with-tailwindCss">Twitter Klonu Projesi</a>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksDetail;
