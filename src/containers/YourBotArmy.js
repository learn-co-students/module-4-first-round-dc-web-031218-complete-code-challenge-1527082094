import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  const handleClick = e => {
    let id = e.target.closest(".column").id;
    props.dischargeBot(parseInt(id, 10));
  };
  return (
    <div className="ui segment inverted olive bot-army" onClick={handleClick}>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.army.map(bot => <BotCard key={bot.id} bot={bot} />)}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
