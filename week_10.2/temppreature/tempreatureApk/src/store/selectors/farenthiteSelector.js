import { tempreatureAtom } from "../atoms/tempreatureAtom.js";
import { selector } from "recoil";

export const farenthiteSelector= selector({
    key: 'farenthiteSelector',
    get: ({ get }) => {
        const celsius= get(tempreatureAtom);
        return (celsius * 9)/5 +32;
    },
});