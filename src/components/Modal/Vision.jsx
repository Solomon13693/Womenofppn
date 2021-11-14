import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

function Vision() {

    const [open, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Button className="shadow-lg" color="neutral" onClick={toggleModal}>
    Our Vision
</Button>
<Modal isOpen={open} toggle={toggleModal}>
    <div className="modal-header">
      <h4 className="modal-title fw-bold" id="exampleModalLabel">
            Our Vision
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

        <p>Our network is a place where women prays and articulate perception and system of heaven at any issue of life.</p>

        <p>Through prayers, women can be freed from captivity of the kingdom of darkness, spiritual bondages, pains, diseases, generational curses, forces from negative powers and principalities </p>

        <p>We pray for women to awaken a purposeful life with God by reaching the lost, broken and needy, ministering and serving with utmost level of dignity, respect and dedicate our lives to prayer, giving and sacrifice to God..</p>

        <p>By His Grace, we inspire maximum participation, promotes personal satisfaction and support in molding every women’s journey to God.</p>

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

export default Vision
