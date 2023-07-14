/* eslint-disable max-lines */
import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
 return(
  <footer className="footer">
    <Container>
      <Row>
      <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <i class="ri-roadster-fill"></i>
                  <span>
                    Rent Car <br /> Now
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
           Our Project “RentCarNow” is a car rental web application.
           We understand the importance of reliable and efficient transportation and thus the purpose of this project is to provide top-notch services to ensure our journey is comfortable and enjoyable. Whether a local resident in need of a temporary vehicle or a traveler exploring the wonders of Bangladesh, our web application is ready to serve.
           Our user-friendly website allows us to effortlessly browse through our inventory, compare prices, and select the perfect vehicle for our needs.

            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info"> Cuet, Chattogram, Bangladesh</p>
              <p className="office__info">Phone: +08801876531138</p>

              <p className="office__info">Email: rcn1.1@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Md. Mubasshir Naib. All rights reserved.
              </p>
            </div>
          </Col>
      </Row>
    </Container>
  </footer>
 );
};

export default Footer