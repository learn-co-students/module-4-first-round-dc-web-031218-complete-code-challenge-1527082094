import React from "react";
import BotCard from "../components/BotCard";


/*
  props={
    yourBots:[],
    unenlistBot:cbf()
  }
*/
class YourBotArmy extends React.Component {

  getBotCards = () => {
    let {yourBots} = this.props;
    return (yourBots.length > 0? 
        yourBots.map(bot => <BotCard key={bot.id}
                                     bot={bot}
                                     enlistBot={this.props.unenlistBot}/>) 
        : <h1>No Bots Enlisted...</h1>)
  }
  render(){
    const botCards = this.getBotCards();
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {botCards}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
