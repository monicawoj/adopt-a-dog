import axios from 'axios';
import jsonp from 'jsonp';

const api = {
  dogs() {
    const base = 'http://api.petfinder.com/';
    const format = 'json';
    const key = 'd7ee8264f2832def33bc257db3764b28';
    const animal = 'dog';
    const output = 'full';
    const proxy = 'https://my-cors-alternative.herokuapp.com/';

    return {
      breedList: () => {
        return axios.get(`${proxy}${base}breed.list?format=${format}&key=${key}&animal=${animal}`);
      },
      getRandom: (count) => {
        return axios.get(`${proxy}${base}pet.getRandom?format=${format}&key=${key}&animal=${animal}&output=${output}&count=${count}`);
      },
      find: (breed='', size='', sex='', location='', age='', count='12') => {
        console.log(`${proxy}${base}pet.getRandom?format=${format}&key=${key}&animal=${animal}&output=${output}&count=${count}${(breed !== '') ? `&breed=${breed}` : ''}${(size !== '') ? `&size=${size}` : ''}${(sex !== '') ? `&sex=${sex}` : ''}${(location !== '') ? `&location=${location}` : ''}`
        );
        return axios.get(`${proxy}${base}pet.getRandom?format=${format}&key=${key}&animal=${animal}&output=${output}&count=${count}${(breed !== '') ? `&breed=${breed}` : ''}${(size !== '') ? `&size=${size}` : ''}${(sex !== '') ? `&sex=${sex}` : ''}${(location !== '') ? `&location=${location}` : ''}`
        );
      }
    }
  }
}

export default api ;
