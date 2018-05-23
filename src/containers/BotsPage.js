import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Search from "./Search";

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    allBots: [],
    filteredBots: [],
    botArmy: [],
    clicked: false,
    botSpec: {}
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          allBots: json
        })
      })
  }

  handleSpecClick = (botName) => {
    const bot = this.state.allBots.find(bot => botName.includes(bot.name))
    this.setState({
      clicked: true,
      botSpec: bot
    })
  }

  handleGoBack = () => {
    this.setState({
      clicked: false,
      botSpec: {}
    })
  }

  handleEnlist = () => {
    if(!this.state.botArmy.includes(this.state.botSpec)){
      this.setState({
        botArmy: [...this.state.botArmy, this.state.botSpec]
      })
    }
  }

  handleSearch = (name) => {
    const filter = this.state.allBots.filter(bot => bot.name.includes(name))
    this.setState({
      filteredBots: filter
    })
  }

  // renderBots(){
  //   const bots =
  //     {
  //       state.filteredBots.length > 0 ?
  //         <BotCollection bots={this.state.filteredBots} handleSpecClick={this.handleSpecClick}  />
  //       :
  //         <BotCollection bots={this.state.allBots} handleSpecClick={this.handleSpecClick}  />
  //     }
  //      return bots;
  // }

  render() {
    console.log(this.state.filteredBots)
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <YourBotArmy botArmy={this.state.botArmy} handleRemoveFromBotArmyClick={this.handleRemoveFromBotArmyClick} />
        {
          this.state.clicked ?
          <BotSpecs bot={this.state.botSpec} handleEnlist={this.handleEnlist} handleGoBack={this.handleGoBack}/> :
          <BotCollection bots={this.state.allBots} handleSpecClick={this.handleSpecClick}  />
        }
      </div>
    );
  }

}

export default BotsPage;
