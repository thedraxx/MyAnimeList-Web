import animeAPI from "../api/AnimeAPI";
import { AnimeTopsInterface } from "../interfaces/GetAnimeTopsInterface'";


export const getAnimeTops = async () => {
  try {
    const resp:AnimeTopsInterface = await animeAPI.get('top/anime');
    return resp;
  } catch (error) {
    console.log({error});
  }
};
