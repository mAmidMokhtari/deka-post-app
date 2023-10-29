import { FC } from 'react';

// local
import Context from "./context";
import texts from './texts.json';

export type Texts = typeof texts

const TextProvider: FC<{ children: React.ReactNode;}> = ({ children }) => {

    const TX = (key: keyof Texts,values?:string[]):string=>{

        let text = texts[key];

        if (!text) {
            return ""
        }

        if(values) {
            values.forEach( (value,index) => {
                // started with 1
                text = text.replaceAll(`{${index+1}}`, value)
            })
        }


        return text
    }

    return (
        <Context.Provider
            value={{TX}}
        >
            {children}
        </Context.Provider>
    )
}

export default TextProvider