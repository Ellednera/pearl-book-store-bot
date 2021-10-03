const Slimbot = require("slimbot")
const slimbot = new Slimbot(process.env["PEARL"]);

regex = new RegExp("^h");

slimbot.on("message", message => {
  var id = message.chat.id;
  var banner = "#~~ Welcome to Pearl Book Store! ~~#"
  if (regex.test(message.text)) {
    slimbot.sendMessage(id, "Hello!")
    slimbot.sendMessage(id, banner)
  } else {
    slimbot.sendMessage(id, "How can I help you?")
  }
})

console.log("Bot script started...")
slimbot.startPolling()
