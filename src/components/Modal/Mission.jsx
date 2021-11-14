import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

function Mission() {

    const [open, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Button className="shadow-lg" color="neutral" onClick={toggleModal}>
    Our Mission
</Button>
<Modal isOpen={open} toggle={toggleModal}>
    <div className="modal-header">
      <h4 className="modal-title fw-bold" id="exampleModalLabel">
        Our Mission
      </h4>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-hidden="true"
        onClick={toggleModal}
      >
        <i className="fas fa-times" />
      </button>
    </div>
    <ModalBody>

        <p>Our mission is to help loss souls in captivity restored back to God, by women, for women, to women.</p>

    </ModalBody>
    <ModalFooter className="" >
        <Button color="secondary" onClick={toggleModal}>
            Close
        </Button>
    </ModalFooter>
</Modal>
        </div>
    )
}

export default Mission
