// besiyata d'shmaya

// send images to user
/* source:
https://github.com/edisonchee/slimbot/blob/master/examples/sendFile.js
*/

// this script is not working !!
// see send_img_by_url.js and send_img_by_id.js
const Slimbot = require("slimbot");
const fs = require("fs");

const slimbot = new Slimbot(process.env["PEARL"]);

// only sending using direct upload
try {
  const file_path = fs.createReadStream(
    "/home/pi/Desktop/programs/telegram/pearl-book-store-bot/images/Frozen_poster.jpg");
  //console.log(file_path);
  //throw "Stopped at line 17";
} catch (err) {
  console.log(err);
}

try{
  slimbot.on("message", message => {
    slimbot.sendPhoto(message.chat.id, file_path)
      .then( message => {
        console.log(message.result.photo);
    } );
  });
} catch (err) {
  console.log(err);
}

console.log("Bot started...");
slimbot.startPolling();

// besiyata d'shmaya

