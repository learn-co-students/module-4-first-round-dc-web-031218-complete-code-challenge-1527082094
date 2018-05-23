import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state ={
    allBots: [],
    botArmy: []
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

  handleRemoveFromBotArmyClick = (botName) => {
    const bot = this.state.allBots.find(bot => botName.includes(bot.name))
    const index = this.state.botArmy.indexOf(bot)
    const army = [...this.state.botArmy]
    const newArmy = army.splice(index, 1)

    this.setState({
      botArmy: army
    })
  }

  handleAddToBotArmyClick = (botName) => {
    const bot = this.state.allBots.find(bot => botName.includes(bot.name))
    if (!this.state.botArmy.includes(bot)){
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleRemoveFromBotArmyClick={this.handleRemoveFromBotArmyClick} />
        <BotCollection bots={this.state.allBots} handleAddToBotArmyClick={this.handleAddToBotArmyClick} />
      </div>
    );
  }

}

export default BotsPage;
