
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
      <Button color="danger" onClick={toggle}>+</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
   
        <label for="name">Id:</label>
  <input type="text" id="fname" name="fname" value={props.state.Id} onChange={props.inputChangeId}/><br/><br/>
        <label for="name">name:</label>
  <input type="text" id="fname" name="fname" value={props.state.name} onChange={props.inputChangeName}/><br/><br/>
  <label for="lname">image:</label>
  <input type="text" id="image" name="image" value={props.state.lien}  onChange={props.inputChangeImg}/><br/><br/>
  <label for="fname">Description:</label>
  <textarea name="comment" form="usrform" value={props.state.desc} onChange={props.inputChangeDesc} ></textarea> <br/><br/>
  <label for="fname">rating:</label>
  <input type="text" id="rate" name="rate" value={props.state.rate} onChange={props.inputChangeRate} /><br/><br/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.addMovie
}>Add movie</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;