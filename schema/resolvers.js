const axios = require('axios');

const urlApi = "https://digimon-api.vercel.app/api/digimon";

const resolvers = {
    Query: {
        characters: () => {
            const apiResponse = axios.get(urlApi).then(async resp => {

                return await resp.data;
            });

            console.log(apiResponse)
            return apiResponse;
        },

        character: (parent, args) => {
            const name = (args.name).toUpperCase();

            const apiResponse = axios.get(urlApi).then(async resp => {
  
                const filter = resp.data.filter((character) => (character.name).toUpperCase() == name);

                return await  filter[0];

            });

           

            return apiResponse;
        },
    },

};

module.exports = { resolvers };
