const axios = require('axios');

const urlApi = "https://digimon-api.vercel.app/api/digimon";

const resolvers = {
    Query: {
        characters: () => {
            const apiResponse = axios.get(urlApi).then(async resp => {
                return await resp.data;
            });
            return apiResponse;
        },
    },

};

module.exports = { resolvers };
