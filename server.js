const { token, prefix } = require("./config.json")

const discord = require("discord.js")
const client = new discord.Client();

client.on("ready", () => {
  console.log("Ben hazırım!")
  client.user.setActivity("Ben bir eğitim botuyum!") // Durumu ayarlıyoruz
})

client.login(token)
