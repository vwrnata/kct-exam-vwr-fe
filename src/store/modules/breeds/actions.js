import axios from "axios";

export default {
  async loadBreeds(context) {//, payload
    const breeds = [];
    axios
      .get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key": "fcdaf76d-921a-4de3-9329-61251bd4c7cf",
        },
      })
      .then(function(response) {
        
        const responseData = response.data
        console.log(responseData);
        for (const key in responseData) {
          // console.log(JSON.stringify(item));
          const item = responseData[key];
          // console.log(item);
          let image = {};
          if(item.image){
            image = {
              width: item.image.width,
              height: item.image.height,
              imgUrl: item.image.url,
            }
          }else{
            image = {
              width: 0,
              height: 0, 
              imgUrl: ''
            }
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
      })
      .catch(function(err) {
        console.log(err);
        const error = new Error(err || "Failed to fetch!");
        throw error;
      })
      .then(function() {
        // always executed
      });
    context.commit("setBreeds", breeds);
  },
};
