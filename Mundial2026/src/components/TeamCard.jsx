import React from "react";

const TeamCard = ({ nombre, bandera }) => {
  return (
    <div className="team-card">
      <img
        src={bandera}
        alt={nombre}
        width="120"
      />

      <h3>{nombre}</h3>
    </div>
  );
};

export default TeamCard;