import {create} from 'apisauce';
import qs from 'qs';
import {UnauthorizedError} from './unauthorized-error';

let headers = {accept: 'application/json'};

const BASE_URL = 'https://echo-serv.tbxnet.com/v1';

// define the api
const api = create({
  baseURL: BASE_URL,
  headers: headers,
  timeout: 30000,
});

export const authenticate = async body => {
  const response = await api.post('/mobile/auth', qs.stringify(body), {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  });
  if (response.status === 200) {
    return response.data;
  }
  throw 'Ha ocurrido un error inesperado';
};

export const getData = async () => {
  const response = await api.get('/mobile/data');
  if (response.status === 200) {
    return response.data;
  }

  if (response?.data?.code === 'E403') {
    throw new UnauthorizedError('Unauthorized');
  }
  throw new Error('Ha ocurrido un error inesperado, intente nuevamente');
};

export default api;
