// besiyata d'shmaya

const Slimbot = require("slimbot");
const slimbot = new Slimbot(process.env["PEARL"]);

rg = new RegExp(/\bfrozen\b/i);

let file_id = "AgACAgQAAxkDAANSYVlohQtkQOj9Esdy0-e1RDForxgAAijRNRurGWQHYRqOhh7Lnx0BAAMCAAN4AAMhBA";

try {
  slimbot.on("message", message => {
    if ( rg.test(message.text) ) {
      // img and text will come in different times
      slimbot.sendMessage(message.chat.id, "Here's a Frozen photo :)");
      slimbot.sendPhoto(message.chat.id, file_id).then(message => {
        console.log(message.result.photo);
      });
    } else {
      slimbot.sendMessage(message.chat.id, "Good day :)");
    }
  });
} catch (e) {
  console.log(e);
}

console.log("Bot started:\n" +
            "  Will send img based on file id due to sending through URL");

slimbot.startPolling();

// besiyata d'shmaya
