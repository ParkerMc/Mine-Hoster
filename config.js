const fs = require("fs");

module.exports = {
  loadConfig: function(){
    if(fs.existsSync(module.exports.file)){
      JSON.parse(fs.readFileSync(module.exports.file));
    }
  },
  data: {
    WebPort: 8080,
    WebUrl: "localhost",
    ssl: false,
  },
  file: "config.cfg"
}
