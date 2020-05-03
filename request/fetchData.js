const nodeFetch = require("node-fetch");

class fetchData {
  constructor(url) {
    this.url = url;
    this.today = new Date().toString().slice(0, 15);
  }

  // Get popular posts, return results in array
  // First element is title, remainder are posts
  async default(count) {
    // make sure count is positive
    if (count < 1 || count > 20) count = 5;

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
