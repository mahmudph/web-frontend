import React from "react";
import { SEO, Navbar, Footer, MemberCard } from '"~/src/components/atoms";';

import s from "~/assets/styles/teams/index.module.scss";
import TeamData from "~/assets/data/teams.json";

const PatalTeam = () => {
  return (
    <div>
      <SEO title="Patal Team" />
      <Navbar />
      <div className={`${s["mainBg"]} ${s["p8"]}`}>
        <div className={`${s["grid"]} ${s["gridTeams"]}`}>
          {TeamData.map((team, i) => (
            <div key={i} className={`${s["centerMargin"]}`}>
              <MemberCard
                name={team.name}
                job={team.job}
                imageUrl={team.imageUrl}
                links={team.links || {}}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatalTeam;
