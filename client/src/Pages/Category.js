import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const [res, setRes] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await axios.get(
          `http://localhost:1337/api/categories/${id}`
        );
        console.log(`result`, result.data.data);
        setRes(result.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <div>
      <h1>{res.attributes.name}</h1>
      <h2>{res.attributes.body}</h2>
        
    </div>
  );
};

export default Category;
