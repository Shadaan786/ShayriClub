import { Children, createContext, useState } from "react";

export const ModalContext = createContext()
export const ModalContextprovider = ({children})=>{

    const [isKalamMenuOpen, setIsKalamMenuOpen] = useState(false);
    const [kalamId, setKalamId] = useState("");
    const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });

    return(
    <ModalContext.Provider value = {{isKalamMenuOpen, setIsKalamMenuOpen, kalamId, setKalamId, menuPosition, setMenuPosition}}>
        {children}
    </ModalContext.Provider>
)
}

// const ModalContext =()=>{
//     const [isOpened, setIsOpened] = useState(false);

// }

