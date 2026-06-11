import React from "react";

const MatchCard = ({ local, visitante, fecha, hora }) => {
  return (
    <div className="match-card">
      <h3>
        {local} VS {visitante}
      </h3>

      <p>📅 {fecha}</p>
      <p>⏰ {hora}</p>
    </div>
  );
};

export default MatchCard;