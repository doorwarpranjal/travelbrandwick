import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'



const { persistAtom } = recoilPersist()

const userState = atom({
  key: "Travel_user",
  default: {
    email: null,
    userId: null,
    userToken: null,
    name: null,
  },
  
  effects_UNSTABLE: [persistAtom]
});






export {userState};
