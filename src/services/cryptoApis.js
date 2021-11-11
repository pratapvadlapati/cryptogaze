import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
var axios = require("axios").default;

const cryptoAPIHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '441fb9fca6msh3fae40c2f55382fp1c1cebjsnefe853589006',
    'x-access-token': 'i-have-to-migrate-to-v2'
}

const baseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi;