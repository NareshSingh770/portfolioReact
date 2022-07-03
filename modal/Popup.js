import React, { useContext } from 'react'
import { ModalOpen } from '../context/Context'

const Popup = () => {

    const [modalState, setModal] = useContext(ModalOpen)

    return (
        <>
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="close" onClick={() => setModal(!modalState)}>&times;</button>
                        </div>

                        <div className="modal-body">
                            Content not updated...
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => setModal(!modalState)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup