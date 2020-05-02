const nodeFetch = require("node-fetch");

class fetch {
    constructor(url){
        this.url = url;
    }
    
    // Get popular posts by default
    async default(count) {
        // make sure count is positive
        if (count < 1 || count > 20) count = 5;
      
        try {
          const response = await nodeFetch(this.url);
          const json = await response.json();
          for (let x = 0; x < count; x++) {
            console.log(json.data.children[x].data.title);
          }
          console.log("\n");
        } catch (error) {
          console.log(error);
        }
      };
}

module.exports = fetch;
