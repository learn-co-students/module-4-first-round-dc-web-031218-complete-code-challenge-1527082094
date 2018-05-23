import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    console.log(this.props);
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard
              onClick={this.props.addToArmy}
              key={bot.id}
              bot={bot}
              value={bot.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
