import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();

    this.state = {
      botCollection: [],
      yourBotArmy: []
    };
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(json => {
        this.setState({
          botCollection: json
        });
      });
  }

  enlistHandler = bot => {
    // get the bot id and make things happen based on this id
    // filter army by id if none then not in
    console.log("bot on entry:", bot);
    let target = this.state.yourBotArmy.filter(b => b.id === bot.id);
    console.log("target?", target);
    if (target.length === 0) {
      // target array is empty, so this bot is not in the army!
      // add to army
      console.log("in true-if // need to add bot to army");
      let armyCopy = [...this.state.yourBotArmy];
      console.log("current army:", armyCopy);
      armyCopy.push(bot);
      console.log("army after push:", armyCopy);
      this.setState({ yourBotArmy: armyCopy }, x =>
        console.log("state afterwards:", this.state)
      );
    } else {
      // bot is already in the army
      // remove from army
      console.log("in false-if // need to remove bot from army");
      console.log("current army:", this.state.yourBotArmy);
      let updatedArmy = this.state.yourBotArmy.filter(b => {
        return b.id !== bot.id;
      });
      console.log("updated army:", updatedArmy);

      this.setState({ yourBotArmy: updatedArmy }, x =>
        console.log("state afterwards:", this.state)
      );
    }
  };

  render() {
    return (
      <div>
        <YourBotArmy
          enlistHandler={this.enlistHandler}
          army={this.state.yourBotArmy}
        />
        <BotCollection
          enlistHandler={this.enlistHandler}
          collection={this.state.botCollection}
        />
      </div>
    );
  }
}

export default BotsPage;
