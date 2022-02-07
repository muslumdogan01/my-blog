import React from "react";
import {RiFacebookFill} from "react-icons/ri";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {AiFillPhone} from "react-icons/ai";



const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Sosyal ağlar üzerinden benimle iletişime geçebilirsiniz:</span>
          </div>

          <div>
            <a target={"_blank"} href="https://www.facebook.com/muslumdogan01/" className="me-4 text-reset">
              <RiFacebookFill/>
            </a>
            <a target={"_blank"} href="https://twitter.com/muslum_dogann" className="me-4 text-reset">
              <AiOutlineTwitter/>
            </a>
            <a target={"_blank"} href="https://www.instagram.com/muslummdogan/" className="me-4 text-reset">
              <AiOutlineInstagram/>
            </a>
            <a target={"_blank"} href="https://github.com/muslumdogan01" className="me-4 text-reset">
                <AiOutlineGithub/>
            </a>
            <a target={"_blank"} href="https://www.linkedin.com/in/muslumdogan01/" className="me-4 text-reset">
                <AiFillLinkedin/>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i> MÜSLÜM DOĞAN
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">POPÜLER YAZILAR & SAYFALAR</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                <i className="me-1"><AiFillHome/> </i> Menemen / İzmir
                </p>
                <p>
                  <i className="me-1"><AiOutlineMail/></i>
                   muslumdogan01@gmail.com
                </p>
                <p>
                  <i className="me-1"><AiFillPhone/></i> + 90 553 933 52 03
                </p>

              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
