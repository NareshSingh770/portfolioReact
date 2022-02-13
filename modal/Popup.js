import React, { useContext } from 'react'
import { ModalOpen } from '../context/Context'

const Popup = () => {

    const [modalState, setModal] = useContext(ModalOpen)

    return (
        <>
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="close" onClick={() => setModal(!modalState)}>&times;</button>
                        </div>

                        <div class="modal-body">
                            Content not updated...
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" onClick={() => setModal(!modalState)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup