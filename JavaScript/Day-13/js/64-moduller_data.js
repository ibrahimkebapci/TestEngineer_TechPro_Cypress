import{myArray} from "./64-moduller_fonksiyon.js"
import abc from "./64-moduller_fonksiyon.js";

export const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]


const topla = (...sayilar) => 
{
    return sayilar.reduce((acc,curr) => acc+curr,0);
}


