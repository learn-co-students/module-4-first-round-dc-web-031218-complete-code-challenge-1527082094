import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.collection.map(bot => {
            return (
              <BotCard
                enlistHandler={this.props.enlistHandler}
                key={bot.id}
                bot={bot}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
