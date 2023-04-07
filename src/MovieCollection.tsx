import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Movies';

function TopBanner(props: any) {
  return (
    <>
      <TopBanner saying="Joel Hilton's Movie Mania - Movie Collection" />
      <div className="row">
        <div className="col-3">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
            width="250px"
            height="150px"
          ></img>
        </div>

        <div className="col align-self-center text-start">
          <h1>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
