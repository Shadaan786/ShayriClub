import { Children, createContext, useState } from "react";

export const ModalContext = createContext()
export const ModalContextprovider = ({children})=>{

    const [isKalamMenuOpen, setIsKalamMenuOpen] = useState(false);
    const [kalamId, setKalamId] = useState("");
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
    const [postOpen, setPostOpen] = useState(null);

    return(
    <ModalContext.Provider value = {{isKalamMenuOpen, setIsKalamMenuOpen, kalamId, setKalamId, menuPosition, setMenuPosition, isCommentModalOpen, setIsCommentModalOpen, postOpen, setPostOpen}}>
        {children}
    </ModalContext.Provider>
)
}

// const ModalContext =()=>{
//     const [isOpened, setIsOpened] = useState(false);

// }

