import axios from "axios";

export default {
  /**@TODO axis GET*/
  async loadFavorites(context) {
    //, payload
    const response = await axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "fcdaf76d-921a-4de3-9329-61251bd4c7cf",
      },
    });

    // console.log(response);
    // const responseJson = await response.json();

    if (response.status !== 200) {
      const error = new Error(response.statusText || "Failed to fetch!");
      throw error;
    }
    const breeds = [];

    const responseData = response.data;
    // console.log(responseData);
    for (const key in responseData) {
      // console.log(JSON.stringify(item));
      const item = responseData[key];
      // console.log(item);
      let image = {};
      if (item.image) {
        image = {
          width: item.image.width,
          height: item.image.height,
          imgUrl: item.image.url,
        };
      } else {
        image = {
          width: 0,
          height: 0,
          imgUrl: "",
        };
      }
      const breed = {
        id: item.id,
        name: item.name,
        description: item.description,
        origin: item.origin,
        image: image,
      };
      breeds.push(breed);
    }
    context.commit("setFavorites", breeds);
  },
  addFavorite(context, payload) {
    /**@TODO axis POST */
    context.commit("addToFavorites", payload);
  },
  removeFavorite(context, payload) {
    /**@TODO axis DELETE */
    context.commit("removeFromFavorites", payload);
  },
};
