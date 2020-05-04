let fetch = require("./fetchData");
const nodeFetch = require("node-fetch");

class reddit extends fetch {
  constructor(url) {
    super(url);
    this.posts = [];
  }
  async keyboard(count) {
    try {
      this.posts.length = 0;
      this.posts.push(`\nNewest Keyboard Posts (Reddit) -- ${this.today}\n`);

      const response = await nodeFetch(
        "https://reddit.com/r/bapcsalescanada/search.json?q=Keyboard&sort=new&restrict_sr=1"
      );
      const json = await response.json();
      for (let x = 0; x < count; x++) {
        this.posts.push(json.data.children[x].data.title + "\n");
      }
      return this.posts;
    } catch (error) {
      console.log(error);
    }
  }

  async til(count) {
    try {
      this.posts.length = 0;
      this.posts.push(`\nToday I learned (Reddit) -- ${this.shortDate}\n`);

      const response = await nodeFetch(
        "https://www.reddit.com/r/todayilearned/top.json?t=day"
      );
      const json = await response.json();
      for (let x = 0; x < count; x++) {
        this.posts.push(json.data.children[x].data.title + "\n");
      }
      return this.posts;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = reddit;
