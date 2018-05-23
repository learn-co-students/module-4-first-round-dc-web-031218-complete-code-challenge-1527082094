import React from "react";
import BotCard from "../components/BotCard";


/*
  props = {
    unenlistedBots:[
      {
        armor:
        avatar_url:
        bot_class:
        catchphrase:
        damage:
        health:
        id:
        name:
      }
      ...
    ],
    enlistBot: cbf()
  }
*/
class BotCollection extends React.Component {
  //your code here

  getBotCards = () =>{
    let {unenlistedBots} = this.props;
    return (unenlistedBots.length > 0? 
            unenlistedBots.map(bot => <BotCard key={bot.id}
                                               bot={bot}
                                               enlistBot={this.props.enlistBot}/>) 
            : <h1>Loading bots...</h1>)
  }
  render(){
    const botCards = this.getBotCards();
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {botCards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
