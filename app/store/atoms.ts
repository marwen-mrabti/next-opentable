import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "openTable",
});

const authState = atom({
  key: "auth",
  default: {
    loading: true,
    data: null,
    error: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export { authState };
