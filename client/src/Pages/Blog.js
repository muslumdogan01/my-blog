import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import client from "../api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await client.get("/api/blogs");
        console.log(result.data.data);
        setBlogs(result.data.data);
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
      <div class="alert alert-danger text-center" role="alert">
        <h1 className="text-dark fw-bold">ERROR...</h1>
      </div>
    );
  }

  return (
    <div className="row">
      {blogs.map((item) => {
        return (
          <div className="card text-center" key={item.id}>
            <div className="card-body p-5">
            <h5 className="card-title mb-3">{item.attributes.title}</h5>
              <h3 className="card-title mb-3">{item.attributes.author}</h3>
              
              <p className="card-text mb-3">
                {item.attributes.body.substring(0, 100)}...
              </p>
              <Link to={`/Detail/${item.id}`}>
                <button className="btn btn-dark">Devamını oku...</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
