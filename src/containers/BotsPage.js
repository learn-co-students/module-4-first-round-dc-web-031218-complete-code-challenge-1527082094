import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
  	super(props);
  	this.state = {
  		yourBots:[],
  		unenlistedBots:[]
  	}
  }

  componentDidMount(){ //fetch bots after mounting
  	let url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
  	fetch(url)
  		.then(response => response.json())
  		.then(objArr=> this.setState({ //set unenlistedBots = fetched arr
  				unenlistedBots: objArr
  			  })//end setState
  		 )//end .then
  }

  enlistBot = (bot) =>{
  	//remove bot from unenlisted, add to yourBots
  	let unenlistedNew = this.state.unenlistedBots.filter(b => b.id != bot.id);
  	this.setState({
  		yourBots: [...this.state.yourBots, bot],
  		unenlistedBots: unenlistedNew
  	})
  }

  unenlistBot = (bot) =>{
  	console.log("BotsPage::unenlistBot()", bot);
  	//add bot to unenlisted, re-sort
  	let unenlistedNew = [...this.state.unenlistedBots, bot]; 
  	unenlistedNew.sort((b1, b2)=>b1.id - b2.id);
  	//remove bot from yourBots
  	let yourBotsNew = this.state.yourBots.filter(b=> b.id != bot.id);
  	this.setState({
  		yourBots: yourBotsNew,
  		unenlistedBots: unenlistedNew
  	})

  }

  render() {
    return (
      <div style={{margin:10, border:"1px solid green"}}>
      	<h1>BotsPage</h1>
        <YourBotArmy yourBots={this.state.yourBots}
        			 unenlistBot={this.unenlistBot}/>
        <BotCollection unenlistedBots={this.state.unenlistedBots}
        			   enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
