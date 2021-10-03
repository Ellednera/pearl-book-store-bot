// besiyata d'shmaya

const Slimbot = require("slimbot");
const slimbot = new Slimbot(process.env["PEARL"]);

const rg = new RegExp(/\bfrozen\b/i);

let img_url = "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg";

try {
  slimbot.on("message",message => {
    //if (message.text.toLowerCase() == "frozen") {
    if ( rg.test( message.text ) ) {
      slimbot.sendMessage(message.chat.id, "Here's a Frozen photo :)");
      slimbot.sendPhoto(message.chat.id, img_url).then( message => {
        console.log(message.result.photo);
      });
    } else {
      slimbot.sendMessage(message.chat.id, "Hello");
    }
  });
} catch (err) {
  console.log(err);
}

console.log("Bot started...");
slimbot.startPolling();

// besiyata d'shmaya
