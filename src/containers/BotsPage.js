import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      bots: [],
      yourArmy: []
    };
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(data => this.setState({ bots: data }));
  }

  handleState(i) {
    //my this isn't what I'm expecting
    debugger;
    let bot = this.state.bots.find(b => b.id == i);
    console.log(bot);
    this.setState({
      yourArmy: [...yourArmy, bot]
    });
  }

  handleArmyRemoval(index, e) {
    this.setState({
      yourArmy: this.state.yourArmy.filter(bot => bot.id != index)
    });
  }

  addToArmy(index, e) {
    console.log(this.state.bots);
    console.log(index);
    debugger;
    this.handleState(index);
  }

  render() {
    return (
      <div>
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots} />
        <YourBotArmy
          handleArmyRemoval={this.handleArmyRemoval}
          army={this.state.yourArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
