// atoms is a foldr you need when using Recoil
import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});
export const postIdState = atom({
  key: "postIdState",
  default: "",
});
