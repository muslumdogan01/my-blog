import React from "react";

const Posts = () => {
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
            <div className="col-md-6 p-3 p-md-5 ">
              <div class="card" style={{ width:"18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a  class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-3 p-md-5">
              <div class="card" style={{ width:"18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
