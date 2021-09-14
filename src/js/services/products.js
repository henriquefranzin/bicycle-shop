import { API_BASE_URL } from '../constants.js';

const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}products`, {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return response.json();
}

export { getProducts };
