import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <i  onClick={toggle} className="fas fa-keyboard"></i>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
   
        <label for="name">name:</label>
  <input type="text"  id="fname"  name="fname" onChange={props.inputupdateNom} /><br/><br/>
  <label for="lname">image:</label>
  <input type="text"  id="image" name="image" onChange={props.inputupdateImg}/><br/><br/>
  <label for="fname">Description:</label>
  <textarea name="comment"  form="usrform" onChange={props.inputupdateDesc} ></textarea> <br/><br/>
  <label for="fname">rating:</label>
  <input type="text"  id="rate" name="rate" onChange={props.inputupdateRate} /><br/><br/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(id)=>props.updateMovie(props.id)}>update</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;