import axios from 'axios';
import {generateRandomNumber} from '../utils';

const addHeightToUser = (user) => {
  return {
    ...user,
    height: {ft: generateRandomNumber(5,6), in: generateRandomNumber(1,8)}
  }
}

export const fetchModels = async () => {
  const res = await axios.get("https://randomuser.me/api/?inc=gender,name,id,picture&results=5")

  return {
    ...res,
    data: {
      ...res.data,
      results: res.data.results.map(addHeightToUser)
    }
  }
};
