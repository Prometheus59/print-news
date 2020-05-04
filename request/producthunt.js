const fetchData = require("./fetchData");
const nodeFetch = require("node-fetch");
const key = require("../config/ph_key");
const url = "https://api.producthunt.com/v2/api/graphql";

class producthunt extends fetchData {
  constructor(count) {
    super(count);
  }

  async default(count) {

    // Set up & initialize result array
    let result = [];
    result.push(`Top ${count} Product Hunt Posts ${this.today}\n`);

    // GraphQL Query
    let query = `{
                    posts(first:5, featured:true){
                    edges {
                    node {
                        name
                        description
                    }
                    }
                }
                }`;

    let options = {
      method: "POST",
      headers: {
        Authorization: key.ph_dev_token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
    };

    let response = await nodeFetch(this.url, options).then((res) => res.json());

    for (let x = 0; x < 5; x++) {
      result.push(response.data.posts.edges[x].node.name);
      result.push(response.data.posts.edges[x].node.description + "\n");
    }

    return result;
  }
}

module.exports = producthunt;
