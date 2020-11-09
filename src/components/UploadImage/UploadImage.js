import React, { useState } from 'react';
import ImageUploading from "react-images-uploading";
import './UploadImage.css';


const UploadImage = () => {

    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <section className="tools gallery" id="tools">
            <div className="max-width">
                <h2 className="title">Image gallery</h2>
                <div className="App">
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <button
                                        id="upload"
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Upload Image
                                    </button>
                                    <button id="remove" onClick={onImageRemoveAll}>Remove all</button>

                                    <div className="row">
                                        {imageList.map((image, index) => (
                                            <div key={index} className="col-lg-4 col-md-6  image-item">
                                                <div className="card mt-4">
                                                    <figure>
                                                        <img src={image.data_url} alt="" />
                                                    </figure>
                                                    <div className="card-body d-flex justify-content-between">
                                                        <button className="btn btn-success" onClick={() => onImageUpdate(index)}>Update</button>
                                                        <button className="btn btn-danger" onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            )}
                    </ImageUploading>
                </div>
            </div>
        </section>
    );
};

export default UploadImage;