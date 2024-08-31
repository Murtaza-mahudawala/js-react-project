import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';

function Des() {
    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm();
    
    const [desti_name, setDestiName] = useState('');
    const [stay_price, setStayPrice] = useState('');
    const [stay_night, setStayNight] = useState('');
    const [img, setImg] = useState(null); // Use null as initial value for the file

    const postdata = async (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();
        formData.append('desti_name', desti_name);
        formData.append('stay_price', stay_price);
        formData.append('stay_night', stay_night);
        formData.append('image', img); // Append the file directly

        try {
            const response = await axios.post('http://localhost:1338/api/insert', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.message === "Data submitted successfully") {
                alert("Your data has been submitted successfully!");
            }
        } catch (error) {
            console.error('Error adding destination:', error);
            alert("There was an error submitting your data.");
        }
    };

    return (
        <>
            <section className="w3l-about-breadcrumb text-left">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container py-2">
                        <h2 className="title">Add Destination</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="/">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Add-Destination</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w3l-contact" id="contact">
                <div className="contact-infubd py-5">
                    <div className="container py-lg-3">
                        <div className="contact-grids row">
                            <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
                                <form onSubmit={handleSubmit} className="signin-form">
                                    <div className="input-grids">
                                        <h1>ADD DESTINATION</h1>
                                        <br />
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="na"
                                                id="desti_name" {...register("na", {required: "Destination Name is Mandatory",})}
                                                placeholder="Your stay destination"
                                                className="contact-input"
                                                value={desti_name}
                                                onChange={(e) => setDestiName(e.target.value)}
                                            />{errors.na && (
                                                <span className="errors" style={{ color: "red"}}>
                                                    {errors.na.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                name="stay_price"
                                                id="stay_price" {...register("stay_price" , { required:"stay Price is Mandatory",})}
                                                placeholder="Enter price"
                                                className="contact-input"
                                                value={stay_price}
                                                onChange={(e) => setStayPrice(e.target.value)}
                                            />{errors.stay_price && (
                                                <span className="error" style={{ color: "red"}}>
                                                    {errors.stay_price.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="stay_night"
                                                id="stay_night" {...register("stay_night" , { required:"Stay Night is Mandatory",})}
                                                placeholder="Stay duration"
                                                className="contact-input"
                                                value={stay_night}
                                                onChange={(e) => setStayNight(e.target.value)}
                                            />{errors.stay_night && (
                                                <span className="error" style={{ color: "red"}}>
                                                    {errors.stay_night.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                name="img"
                                                // id="img" {...register("img" , { required:"Stay Night is Mandatory",})}
                                                placeholder="Upload image"
                                                className="contact-input"
                                                onChange={(e) => setImg(e.target.files[0])} 
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-style btn-primary" onClick ={handleSubmit(postdata)}
                                        type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Des;
