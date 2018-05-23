import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

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
  constructor(props){
    super(props);
    this.state = {
      showAll: true,
      botSpec: null
    }
  }
  handleBotSpecs = (bot) =>{
    console.log("BotCollection::handleBotSpecs()")
    this.setState({
      showAll: false,
      botSpec: bot
    }, ()=>console.log(bot))
  }
  handleGoBack = () =>{
    // console.log("BotCollection::handleGoBack()");
    this.setState({
      showAll: true,
      botSpec: null
    })
  }

  handleSpecEnlist = (bot) =>{
    console.log("BotCollection::handleSpecEnlist()", bot);
    this.props.enlistBot(bot);
    this.handleGoBack();

  } 
  getBotCards = () =>{
    let {unenlistedBots} = this.props;
    return (unenlistedBots.length > 0? 
            unenlistedBots.map(bot => <BotCard key={bot.id}
                                               bot={bot}
                                               enlistBot={this.handleBotSpecs}
                                               />) 
            : <h1>Loading bots...</h1>)
  }
  render(){
    const botCards = this.getBotCards();
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.showAll? botCards : <BotSpecs bot={this.state.botSpec}
                                                    handleGoBack={this.handleGoBack}
                                                    handleEnlist={this.handleSpecEnlist}/>}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
