import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


//var axios = require("axios").default;

const cryptoAPIHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_RAPID_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
    'x-access-token': process.env.REACT_APP_RAPID_TOKEN


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