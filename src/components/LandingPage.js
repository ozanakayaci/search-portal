import React from "react";

import "./LandingPage.css";

import { Link } from "react-router-dom";

import SearchBar from "./SearchBar.js";
import TopNews from "./TopNews.js";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="add-button">
        <Link className="button" to="/addlink">
          Add new record
        </Link>
      </div>
      <div className="column">
        <div className="image">
          <img src="../../img/tesodev.jpeg" alt="" width="278" height="115" />
          <h3>Search app</h3>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="news-comp">
        <div className="title">
          <h1>Top News</h1>
        </div>
        <div>
          <TopNews />
        </div>
      </div>
      <div className="footer">
        <div>
          <img src="../../img/467.jpg" alt="" width="218" height="180" />
        </div>
        <div className="contact">
          <p>İletişim</p>
          <p>
            <span>Adres:</span> Çifte Havuzlar Mah. Eski Londra Asfaltı Cad.
            Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          </p>
          <p>
            <span>E-posta:</span> bilgi@tesodev.com
          </p>
        </div>
        <div>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width={470}
                height={222}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=tesodev&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                scrolling="no"
              />
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;height:220px;width:470px;}",
                }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".gmap_canvas {overflow:hidden;background:none!important;height:220px;width:470px;}",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
