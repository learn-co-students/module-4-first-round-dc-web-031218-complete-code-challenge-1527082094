// handleRemoveFromBotArmyClick = (botName) => {
//   const bot = this.state.allBots.find(bot => botName.includes(bot.name))
//   const index = this.state.botArmy.indexOf(bot)
//   const army = [...this.state.botArmy]
//   const newArmy = army.splice(index, 1)
//
//   this.setState({
//     botArmy: army
//   })
// }
//
// handleAddToBotArmyClick = (botName) => {
//   const bot = this.state.allBots.find(bot => botName.includes(bot.name))
//   if (!this.state.botArmy.includes(bot)){
//     this.setState({
//       botArmy: [...this.state.botArmy, bot]
//     })
//   }
// }
