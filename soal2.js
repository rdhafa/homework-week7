const fs = require("fs");

fs.readFile("./homework.log", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("log.txt", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Penulisan log sample berhasil!`);
      }
    });
  }
});
