let fetch = require('./fetchData');
const nodeFetch = require("node-fetch");

class reddit extends fetch {

  constructor(url){
    super(url);
  }

  async keyboard() {
  
    try {
      let posts = [];
      console.log(`\nNewest Keyboard Posts -- ${this.today}\n`);
      posts.push(`\nNewest Keyboard Posts -- ${this.today}\n`);
      const response = await nodeFetch("https://reddit.com/r/bapcsalescanada/search.json?q=Keyboard&sort=new&restrict_sr=1");
      const json = await response.json();
      for (let x = 0; x < 5; x++) {
        posts.push(json.data.children[x].data.title);
        console.log(json.data.children[x].data.title);
      }
      console.log("\n");
      return posts;
    } catch (error) {
      console.log(error);
    }
  };
  
}

module.exports = reddit;