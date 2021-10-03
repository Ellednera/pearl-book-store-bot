// This script just replies to a hello message

const Slimbot = require("slimbot")
const slimbot = new Slimbot("2014914139:AAHwi9CdE5qQRIfAtceiKHY47wRoDFsw5d0")

// register listeners
slimbot.on("message", message => {
  var reply = "You sent this to me:\n" + message.text;
  var chat_id = message.chat.id
  //slimbot.sendMessage(chat_id, "Message received")
  slimbot.sendMessage(chat_id, reply)
  //console.log(chat_id + " sent you a message\n")
  //console.log("  " + message.text)
  // console.log by default has a \n
  console.log(`${chat_id}: ${ message.text }`)
})

console.log("Started the bot...")

// this line must be in, it's the "main" actuall
slimbot.startPolling()

