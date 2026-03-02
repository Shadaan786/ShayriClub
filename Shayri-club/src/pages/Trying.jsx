import { useState } from "react"
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal"
import Button from 'react-bootstrap/Button';



export const Trying=()=>{

    const[modalShow, setModalShow] = useState(false)


    return(
        <>
         <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </>
    )
}