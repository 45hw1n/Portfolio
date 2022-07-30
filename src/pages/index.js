import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import Navigation from "./../Components/Navigation";
import Footer from "./../Components/Footer";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import CarouselComponent from "../Components/Carousel";

const Home = (props) => {
  return (
    <div className="Home">
      <StaticQuery
        query={graphql`
          query Homepage {
            Portfolio {
              videos {
                title
                content {
                  html
                }
                video {
                  url
                }
                thumbnail {
                  url
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
          
          </>
        )}
      />
    </div>
  );
};

export default Home;