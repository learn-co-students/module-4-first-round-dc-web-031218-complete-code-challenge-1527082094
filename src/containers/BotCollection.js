import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  const handleClick = e => {
    let id = e.target.closest(".column").id;
    props.changeDisplay(parseInt(id, 10));
  };
  return (
    <div className="ui four column grid" onClick={handleClick}>
      <div className="row">
        {props.bots.map(bot => <BotCard key={bot.id} bot={bot} />)}
      </div>
    </div>
  );
};

export default BotCollection;
