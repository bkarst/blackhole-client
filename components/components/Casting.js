import React, { useState } from "react";
import Clock from "./Clock";
import Footer from './footer';
import axios from 'axios'
import constants from '../../src/constants';
import Modal from 'react-modal';

// Modal.setAppElement('#yourAppElement');

const customStyles = {
    content: {
      top: '50%',
      backgroundColor: '#000',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export default function EditPollForm({poll}){
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
        // console.log('oijdfajoisdf');
    }
    const openModal = () => {
        setIsOpen(true)
        // console.log('oijdfajoisdf');
    }
    const addOption = () => {
        const title = document.getElementById("description").value;
        var formObj = { description: title, poll_id: poll.id }
        console.log(constants.API_URL + '/api/polls')
        axios.post(constants.API_URL + '/api/poll_options/', formObj).then(response => {
            console.log(response)
            if (response.data.error){
              alert(response.data.error)
            }
            else {
              window.location.reload();
            }
        })
      }

    return <div>

    <section className='jumbotron breadcumb no-bg'>
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12'>
              <h1 className='text-center'>{ poll.title }</h1>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="col-lg-7 offset-lg-1 mb-5">
              <form id="form-create-item" className="form-border" action="#">
                  <div className="field-set">
                      <h5>Description</h5>
                      <input style={{border: '1px solid #ffffff' }} required type="text" name="description" id="description" className="form-control" />
                      <input onClick={addOption} type="button" id="submit" className="btn-main" value="Add Option"/>
                  </div>
              </form>
          </div>
      </Modal>      
    </section>
    <section className='container'>
    {poll.poll_options.map((pollOption, index) =>
            <div key={index}> ----- {pollOption.description}</div>
        )}
    <div className="row">
      <div className="col-lg-7 offset-lg-1 mb-5">
          <form id="form-create-item" className="form-border" action="#">
              <div className="field-set">
                  <input onClick={ setIsOpen } type="button" id="submit" className="btn-main" value="Add Option"/>
              </div>
          </form>
      </div>
  </div>

  </section>

    
  </div>
}

