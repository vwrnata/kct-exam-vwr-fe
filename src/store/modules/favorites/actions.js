import axios from "axios";

/**Adresa BE endpointu */
const BASE_BE_URL = "http://localhost:9080/kcte/rest/v1/";

export default {
  /**@TODO axis GET*/
  async loadFavorites(context) {
    //, payload
    const response = await axios.get(BASE_BE_URL + "favorites", {
      // headers: {
      //   "x-api-key": "fcdaf76d-921a-4de3-9329-61251bd4c7cf",
      // },
    });

    console.log(response);
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
  async addFavorite(context, payload) {
    const breeds = context.rootGetters["breeds/breeds"];
    const breed = breeds.filter((breed) => breed.id == payload.id)[0];
    const addedBreed = {
      id: breed.id,
      name: breed.name,
      description: breed.description,
      origin: breed.origin,
      width: breed.image.width,
      height: breed.image.height,
      url: breed.image.imgUrl,
    }
    console.log(addedBreed);
    /**@TODO axis POST */
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(BASE_BE_URL + "favorites", addedBreed, options);

    console.log(response);

    console.log("addFavorite:" + JSON.stringify(payload.id));
    console.log(context.rootGetters["breeds/breeds"]);
    context.commit("addToFavorites", addedBreed);
  },
  async removeFavorite(context, payload) {
    console.log("removeFavorite:" + JSON.stringify(payload.id));
    /**@TODO axis DELETE */
    const response = await axios.delete(BASE_BE_URL + "favorites/" + payload.id);
    console.log(response);
    context.commit("removeFromFavorites", payload);
  },
};
