const axios = require('axios');

const urlApi = "https://digimon-api.vercel.app/api/digimon";

const resolvers = {
    Query: {
        characters: (parent, args) => {
            let { first, after } = args;
            if (first < 0) throw new Error("first  debe ser mayor a 0");

            const apiResponse = axios.get(urlApi).then(async resp => {

                const data = resp.data;
                let paginationResult;
                let lastIndexData;
                let firstIndexData;
                let filterIndexStart = 0;


                if (after) {
                    after = after.toUpperCase().trim();
                    filterIndexStart = data.findIndex(character => character.name.toUpperCase() === after);
                    if (filterIndexStart < 0) throw new Error("No se econtro al personaje enviado en la paginacion (after)");

                }

                paginationResult = data.slice(filterIndexStart, (filterIndexStart + first));
                lastIndexData = data.findIndex(character => character.name.toUpperCase() === paginationResult[(paginationResult.length - 1)].name.toUpperCase());
                firstIndexData = data.findIndex(character => character.name.toUpperCase() === paginationResult[0].name.toUpperCase());


                const res = {
                    edges: paginationResult.map((character) => ({
                        cursor: character.name.toUpperCase(),
                        node: character,
                    })),
                    pageInfo: {
                        hasNextPage: lastIndexData < (data.length - 1),
                        hasPreviousPage: firstIndexData != 0,
                        showing: paginationResult.length,
                        total: data.length,
                        after: after

                    },
                }


                return await res;



            });


            return apiResponse;
        },

        character: (parent, args) => {
            const name = (args.name).toUpperCase().trim();

            const apiResponse = axios.get(urlApi).then(async resp => {

                const filter = resp.data.filter((character) => (character.name).toUpperCase() == name);

                return await filter[0];

            });



            return apiResponse;
        },
    },

};

module.exports = { resolvers };
