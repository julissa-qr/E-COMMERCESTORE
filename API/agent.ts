import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

/*function responseBodyFn(response: AxiosResponse)
{
    return response.data;
}*/

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body:{}) => axios.post(url).then(responseBody),
    put: (url: string, body:{}) => axios.put(url).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => request.get('products'),
    details: (id: number) => request.get(`products/${id}`)
}

const agent = {
    Catalog
}

export default agent;