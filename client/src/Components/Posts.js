import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const postResult = await axios.get("http://localhost:1337/api/blogs");
        //console.log('kafası',postResult.data.data);
        setBlogs(postResult.data.data);
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
 
      </div>
    );
  } else if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
  
      </div>
    );
  }


  return (
    <div className="container-fulid">
      <div class="alert alert-primary" role="alert">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-3 px-md-5 ">
              <h6 className="text-dark fw-bold">Recent posts</h6>
            </div>
            <div className="col-md-6 px-3 px-md-5 ">
              <h6 className="text-dark fw-bold text-center">View All</h6>
            </div>
          </div>
          <div className="row">
            {blogs.slice(0, 2).map((item) => {
              // console.log("item :>> ", item);
              return (
                <div className="col-md-6 p-3 p-md-5 " key={item.id}>
                  <div className="card" style={{ width: "22rem" }}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title fw-bold">
                          {item.attributes.title}
                        </h5>
                        <span className="text-muted">
                          {item.attributes.author}
                        </span>
                      </div>
                      <p className="card-text">
                        {item.attributes.body.substring(0, 250)}...
                      </p>
                      <Link to={`/Detail/${item.id}`}>
                        <a className="link-primary fw-bold">Go Detail</a>
                      </Link>
                       <div>{item.attributes.createdAt}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
