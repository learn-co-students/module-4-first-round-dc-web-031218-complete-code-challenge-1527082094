import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  handleSpecClick = (e) => {
    this.props.handleSpecClick(e.currentTarget.innerText)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {
            this.props.bots.map(bot => {
              return(
                <BotCard key={bot.id} bot={bot} handleSpecClick={this.handleSpecClick}  />
              )
            })
          }
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
