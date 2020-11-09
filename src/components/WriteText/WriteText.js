import React, { useState } from 'react';
import './WriteText.css';
import shirt from '../../components/images/shirt.jpg';
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


const WriteText = () => {
    const [text, setText] = useState('');
    const { register, handleSubmit, errors } = useForm();
    const [cross, setCross] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onSubmit = data => {
        setText(data.text)
    };

    const displayCross = () => {
        setCross(true);
    }

    return (
        <section className="tools write">
            <div className="max-width">
                <h2 className="title">Write On Image</h2>
                <button className="write-btn btn btn-warning" onClick={openModal} >Write text</button>
                <div className="shirt-content">
                    <img className="shirt" src={shirt} alt="" />
                    <div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"

                        >

                            <h5 className="text-cyan text-center">Write some text</h5>

                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="text" placeholder="Write some text" className="form-control" />
                                    {errors.text && <span className="text-danger">This field is required</span>}

                                </div>

                                <div className="form-group d-flex justify-content-between">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                    <button type="submit" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <Draggable>
                        <div className="drag-box">
                            <div onClick={displayCross}>{text}</div>
                            {cross && <FontAwesomeIcon className="text-danger" icon={faTimes} onClick={() => { setText(''); setCross(false) }}></FontAwesomeIcon>}
                        </div>
                    </Draggable>
                </div>
            </div>
        </section>
    );
};

export default WriteText;