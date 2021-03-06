import axios from "axios";

const BASE_REMOTE_URL = "https://api.thecatapi.com/v1/";
const BREEDS_ENDPOINT = "breeds";

export default {
  async loadBreeds(context) {
    //, payload
    const response = await axios.get(BASE_REMOTE_URL + BREEDS_ENDPOINT, {
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
    context.commit("setBreeds", breeds);
  },
  addBreed(context, payload) {
    context.commit("addBreed", payload);
  },
};
