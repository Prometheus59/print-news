const fetch = require("./fetchData");
const nodeFetch = require("node-fetch");
const url = "http://xkcd.com/info.0.json";

class xkcd extends fetch {
  constructor() {
      super(1);
      this.result = {
          title: "sample title",
          pic_url: "sample_url"
      }
  }

  async default() {

    try{
        let response = await nodeFetch(url)
        let json = await response.json()
            .then(json => {
                this.result.title = json.title.toString();
                this.result.pic_url = json.img.toString();
                return this.result;
            });
        //console.log(this.result);
        return this.result;
    } catch (error) {
        console.log(error);
    }

  }

}


const test = async () => {
    xkcd = new xkcd();
    let y = await xkcd.default();

    console.log(y);
    console.log(y.pic_url);
}


test();