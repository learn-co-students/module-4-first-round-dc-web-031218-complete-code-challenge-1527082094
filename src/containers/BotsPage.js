import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      army: [],
      bots: [],
      spec: false,
      selected: null
    };
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(json => this.setState({ bots: json }));
  }

  enlistBot = id => {
    let bot = this.state.bots
      .filter(bot => !this.state.army.includes(bot))
      .find(bot => bot.id === id);
    if (bot) this.setState({ army: [...this.state.army, bot] });
  };

  dischargeBot = id => {
    let bot = this.state.bots.find(bot => bot.id === id);
    this.setState({ army: this.state.army.filter(soldier => soldier !== bot) });
  };

  changeDisplay = id => {
    let bot = !this.state.selected
      ? this.state.bots.find(bot => bot.id === id)
      : null;

    this.setState({ spec: !this.state.spec, selected: bot });
  };

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} dischargeBot={this.dischargeBot} />
        {!this.state.spec ? (
          <BotCollection
            bots={this.state.bots}
            changeDisplay={this.changeDisplay}
          />
        ) : (
          <BotSpecs
            bot={this.state.selected}
            enlistBot={this.enlistBot}
            changeDisplay={this.changeDisplay}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
