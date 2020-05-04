const nodeFetch = require("node-fetch");

class fetchData {
  constructor(count) {
    // Make count between 1 & 10
    this.count = (count < 1 || count > 10) ? 5 : count;
    this.result = [];
    this.today = new Date().toString().slice(0, 15);
    this.shortDate = new Date().toLocaleDateString();
  }

  // Get popular posts, return results in array
  // First element is title, remainder are posts
  async default(count) {

    try {
      let posts = [];
      const response = await nodeFetch(this.url);
      const json = await response.json();
      let title = `Top ${count} Posts -- ${this.today}\n`;
      posts.push(title);

      for (let x = 0; x < count; x++) {
        posts.push(json.data.children[x].data.title + "\n");
      }
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = fetchData;
