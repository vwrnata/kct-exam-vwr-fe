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
      const image = {
        width: item.width,
        height: item.height,
        imgUrl: item.url,
      };
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
    };
    // console.log(addedBreed);
    /**@TODO axis POST */
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      BASE_BE_URL + "favorites",
      addedBreed,
      options
    );

    // console.log(response);
    if (response.status !== 200) {
      console.log(
        "Chyba při přidávání plemena id: " +
          addedBreed.id +
          ", " +
          response.statusText
      );
    } else {
      const image = {
        width: addedBreed.width,
        height: addedBreed.height,
        imgUrl: addedBreed.url,
      };
      const breed = {
        id: addedBreed.id,
        name: addedBreed.name,
        description: addedBreed.description,
        origin: addedBreed.origin,
        image: image,
      };
      context.commit("addToFavorites", breed);
    }
    // console.log("addFavorite:" + JSON.stringify(payload.id));
    // console.log(context.rootGetters["breeds/breeds"]);
  },
  async removeFavorite(context, payload) {
    console.log("removeFavorite:" + JSON.stringify(payload.id));
    const response = await axios.delete(
      BASE_BE_URL + "favorites/" + payload.id
    );
    // console.log(response);
    if (response.status !== 200) {
      console.log(
        "Chyba při odebírání plemena id: " +
          payload.id +
          ", " +
          response.statusText
      );
    } else {
      context.commit("removeFromFavorites", payload);
    }
  },
};
