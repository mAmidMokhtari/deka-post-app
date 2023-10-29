import { createContext } from "react";

// lcoals
import { Texts } from ".";


export interface ITextContext {
    TX:(key: keyof Texts,values?:string[])=>string,
}

export default createContext<ITextContext>({
    TX: ()=>"",
})