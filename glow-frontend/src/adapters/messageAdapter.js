import { API_ROOT } from '../constants';
import { findUser } from '../adapters/userAdapter';

export const postMessage = (imageData, id) => {
  console.log("this is the imageData",imageData);
  console.log("this is the id", id);
  return fetch(`${API_ROOT}/messages`, {
    method: 'POST',
    headers: {
      name: "test.jpg"
    },
    body: imageData
  })
  .then(() => findUser )

}
