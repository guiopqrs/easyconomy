console.log("Easyconomy Manager Successfully")
const db = require("quick.db")
const ms = require("parse-ms")
const easyconomyver = require("./package.json")

module.exports = class EasyconomyManager {
    version() {
    let data = {
         ver: `${easyconomyver.version}`
      }
      return data
  }
  balance(option) {
    let bal;
    if(!option.userUserId || !option.userGuild || !option.userUsername) {
      throw new Error("Please add option to fetch the money!")
    }
    if(option.userUserId || option.userGuild || option.userUsername) bal = db.get(`easyconomy_money_${option.userGuild}_${option.userUserId}`)
    
    let data = {
      money: `**${option.userUsername}** Balance is **${bal || "0"}**`
    }
    return data
  }
  work(option) {
      if(!option.userGuild || !option.userUsername || !option.userUserId) throw new Error("Please add options")
      let jobs = [
      "Uber Driver",
      "Nurse",
      "Doctor",
      "Clown",
      "Programmer",
      "Designer"
      ]
      let random = jobs[Math.floor(Math.random() * jobs.length)]
      let randommoney = Math.floor(Math.random() * 500) + 100
      
      let salary = `${option.workSalary}`
      if(!salary) salary = randommoney
      
      db.add(`easyconomy_money_${option.userGuild}_${option.userUserId}`, salary)
      
      let data = {
        money: `**${option.userUsername}** Worked as a **${random}** and Earned **${salary}**`
      }
      return data
  }
  addmoney(option) {
       if(!option.userUserId || !option.userUsername || !option.userGuild || !option.moneyAmount) throw new Error("Please add options")
       
       if(isNaN(option.moneyAmount)) throw new Error("Amount is not a number")
       if(option.moneyAmount.includes("-", ".")) throw new Error("Amount is invalid")
       
       db.add(`easyconomy_money_${option.userGuild}_${option.userUserId}`, option.moneyAmount)
       let data = {
         money: `Successfully added **${option.moneyAmount}** To **${option.userUsername}**`
       }
       return data
  }
  beg(option) {
    if(!option.userUserId || !option.userUsername || !option.userGuild) throw new Error("Please input option")
    let amt = option.moneyAmount
    if(!amt) amt = Math.floor(Math.random() * 1000) + 1000

    if(isNaN(option.moneyAmount) || option.moneyAmount.includes("-", ".")) throw new Error("Invalid number")

    db.add(`easyconomy_money_${option.userGuild}_${option.userUserId}`, amt)
    let personalities = [
      "Ariana Grande",
      "Taylor Swift",
      "Danke",
      "Donald Duck",
      "Rat"
    ]
    let rperson = personalities[Math.floor(Math.random() * personalities.length)]

    let data = {
      money: `**${option.userUsername}** begged to **${rperson}** and got **${amt}**`
    }
    return data
  }
  daily(option) {
    if(!option.userUserId || !option.userUsername || !option.userGuild) throw new Error("Please add ome options")
    let daily = db.get(`daily_cooldown_${option.userUserId}_${option.userGuild}`)
    let timeout = 86400000
    let data;

    if(daily !== null && timeout - (Date.now() - daily) > 0){
      let time = ms(timeout - (Date.now() - daily))
      data = {
        money: `Daily gift has already claimed! Come back again in ${time.days}d, ${time.hours}h, ${time.minutes}m, ${time.seconds}s`
      }
    } else {
      let amt = option.moneyAmount
      if(!amt) amt = "5000"
      db.add(`easyconomy_money_${option.userGuild}_${option.userUserId}`, amt)
      db.set(`daily_cooldown_${option.userUserId}_${option.userGuild}`, Date.now())

      data = {
        money: `**${option.userUsername}** successfully claimed **${amt}**`
      }
    }
    return data
    }
  leaderboard(option) {
    //soon
  }
}
