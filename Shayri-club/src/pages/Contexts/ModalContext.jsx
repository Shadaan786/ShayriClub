import { Children, createContext, useState } from "react";

export const ModalContext = createContext()
export const ModalContextprovider = ({children})=>{

    const [isKalamMenuOpen, setIsKalamMenuOpen] = useState(false);
    const [kalamId, setKalamId] = useState("");
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [isKalamCommentModalOpen, setIsKalamCommentModalOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
    const [postOpen, setPostOpen] = useState(null);
    const [kalamComment, setKalamComment] = useState("");
    const[isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
    const [kalamTrack, setKalamTrack] = useState([]);

    return(
    <ModalContext.Provider value = {{isKalamMenuOpen, setIsKalamMenuOpen, kalamId, setKalamId, menuPosition, setMenuPosition, isCommentModalOpen, setIsCommentModalOpen, postOpen, setPostOpen, isKalamCommentModalOpen, setIsKalamCommentModalOpen, kalamComment, setKalamComment, isPlayerModalOpen, setIsPlayerModalOpen, kalamTrack, setKalamTrack}}>
        {children}
    </ModalContext.Provider>
)
}

// const ModalContext =()=>{
//     const [isOpened, setIsOpened] = useState(false);

// }

