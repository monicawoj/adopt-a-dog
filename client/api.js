import axios from 'axios';
import jsonp from 'jsonp';

const api = {
  dogs() {
    const base = 'http://api.petfinder.com/';
    const format = 'json';
    const key = 'd7ee8264f2832def33bc257db3764b28';
    const animal = 'dog';
    const output = 'full';
    const count = '30';
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    return {
      breedList: () => {
        console.log(`${proxy}${base}/breed.list?format=${format}&key=${key}&callback=?&animal=${animal}`);
        return axios
        .get(`${proxy}${base}/breed.list?format=${format}&key=${key}&callback=?&animal=${animal}`)
        .then(({data}) => {
          const cleanData = JSON.parse(data.substring(2,data.length-2));
          const breeds = cleanData.petfinder.breeds.breed.map(breed => breed['$t']);
          console.log(breeds);
          return breeds;
        });
      },
      getRandom: (count) => {
        return axios.get(`${proxy}${base}/pet.getRandom?format=${format}&key=${key}&callback=?&animal=${animal}&output=${output}&count=${count}`);
      },
      find: (breed=null, size=null, sex=null, location=null, age=null) => {
        return axios.get(`${proxy}${base}/pet.find?format=${format}&key=${key}&callback=?&animal=${animal}&output=${output}&count=${count}
          ${breed ? `&breed=${breed}` : null}
          ${size ? `&size=${size}` : null}
          ${sex ? `&sex=${sex}` : null}
          ${location ? `&location=${location}` : null}
          ${age ? `&age=${age}` : null}`
        );
      }
      // update: (toUpdate) =>  axios.put(url,toUpdate),
      // create: (toCreate) =>  axios.put(url,toCreate),
      // delete: ({ id }) =>  axios.delete(`${base}/${id}`)
    }
  }
}

export default api ;
