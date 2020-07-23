import React from "react";
import s from "./Sponsor.module.scss";
import "lazysizes";

function Sponsor() {
  const names = [
    {
      url: "/images/sponsors/sh.png",
      link: "https://sriwijayahost.id",
    },
    {
      url: "/images/sponsors/myo.png",
      link: "https://my-office.co.id",
    },
    {
      url: "/images/sponsors/AGT.png",
      link: "https://agt.co.id/",
    },
  ];
  return (
    <div className={s["sponsorContainer"]}>
      {names.map((name) => (
        <div className={`${s["sponsor"]} `}>
          <a href={name.link} target="_blank" rel="noreferrer">
            <img
              data-src={name.url}
              className="lazyload"
              width="100"
              alt="logo_sponsor"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Sponsor;
