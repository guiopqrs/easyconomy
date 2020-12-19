# Easyconomy
Easyconomy is a Economy package for discord bots
* Easy to use
* fast support
* Suitable for small - medium projects

Notes: Must have quick.db installed
`npm i quick.db`

## Usage
* Balance
```js
const economy = require("easyconomy")
const Economy = new economy()
client.on("message", async message => {
if(message.content.startsWith("balance")){
   let bal = await Economy.balance({
    userUserId: //User id
    userUsername: //User username
    userGuild: //User guild id
    })
    message.channel.send(bal.money)
    }
})
```

* Work
```js
const economy = require("easyconomy")
const Economy = new economy()
client.on("message", async message => {
if(message.content.startsWith("work")){
    let work = await Economy.work({
     userUserId: //User id
     userUsername: //User username
     userGuild: //user guild id
     workSalary: //Optional | work earnings
    })
    message.channel.send(work.money)
}
})
```

* Add Money
```js
const economy = require("easyconomy")
const Economy = new economy()
client.on("message", async message => {
if(message.content.startsWith("addmoney")){
    let addmoney = await Economy.addmoney({
     userUserId: //User id
     userUsername: //User username
     userGuild: //user guild id
     moneyAmount: //Amount of money you want to add
    })
    message.channel.send(addmoney.money)
}
})
```

* Beg
```js
const economy = require("easyconomy")
const Economy = new economy()
client.on("message", async message => {
let beg = await Economy.beg({
   userUserId: //User id
   userUsername: //User username
   userGuild: //User guild id
   moneyAmount: //Optional | Amount
    })
    message.channel.send(beg.money)
}
})
```

* Daily
```js
const economy = require("easyconomy")
const Economy = new economy()
client.on("message", async message => {
if(message.content.startsWith("daily")) {
let daily = await Economy.daily({
    userUserId: //User id
    userUsername: //User username
    userGuild: //User Guil id
    moneyAmount: //Optional | Amount
    })
    message.channel.send(daily.money)
}
})
```

### Installing
`npm install easyconomy`

#### Support
* [Discord](https://discord.gg/Ym3qVMq)

##### Updates
> v1.0.0:
* Added Balance, Addmoney, Work

> v1.0.1:
* Bug Fixes

> 1.1.0:
* Added Beg

> 1.1.1:
* Bug Fixes

> 1.2.0: 
* Bug Fixes
* Added Daily
* Added EconomyManager Class
