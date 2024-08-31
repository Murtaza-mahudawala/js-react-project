import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Main() {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null); // State to hold the selected place

    useEffect(() => {
        Axios.get('http://localhost:1338/api/data_list')
            .then((response) => {
                const filteredPlaces = response.data.filter(place => place.stay_price > 0);
                setPlaces(filteredPlaces);
            })
            .catch((error) => {
                console.error('Error fetching places:', error);
            });
    }, []);

    const handleSelectChange = (e) => {
        const placeName = e.target.value;
        const selected = places.find(place => place.desti_name === placeName);
        setSelectedPlace(selected);
    };

    return (
        <>
            <section className="w3l-about-breadcrumb text-left">
                <div className="banner-content">
                    <div className="demo-inner-content">
                        <div className="container">
                            <div className="banner-infhny">
                                <h3>You don't need to go far to find what matters.</h3>
                                <h6 className="mb-3">Discover your next adventure</h6>
                                <div className="flex-wrap search-wthree-field mt-md-5 mt-4">
                                    <form action="#" method="post" className="booking-form">
                                        <div className="row book-form">
                                            <div className="form-input col-md-4 mt-md-0 mt-3">
                                                <select 
                                                    name="selectpicker" 
                                                    className="selectpicker" 
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="">Select a place</option>
                                                    {places.map((place) => (
                                                        <option key={place.id} value={place.desti_name}>
                                                            {place.desti_name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="bottom-btn col-md-4 mt-md-0 mt-3">
                                                <button className="btn btn-style btn-secondary">
                                                    <span className="fa fa-search mr-3" aria-hidden="true"></span> Search
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {selectedPlace && (
                <section className="w3l-grids-3 py-5">
                    <div className="container py-md-5">
                        <div className="title-content text-left mb-lg-5 mb-4">
                            <h6 className="sub-title">Visit</h6>
                            <h3 className="hny-title">Selected Destination</h3>
                        </div>
                        <div className="row bottom-ab-grids">
                            <div className="col-lg-6 subject-card mt-4">
                                <div className="subject-card-header p-4">
                                    <a href="#" className="card_title p-lg-4 d-block">
                                        <div className="row align-items-center">
                                            <div className="col-sm-5 subject-img">
                                                <img 
                                                    src={`http://localhost:1338/imgupload/${selectedPlace.img}`} 
                                                    className="img-fluid" 
                                                    alt={selectedPlace.desti_name} 
                                                />
                                            </div>
                                            <div className="col-sm-7 subject-content mt-sm-0 mt-4">
                                                <h4>{selectedPlace.desti_name}</h4>
                                                <p>{selectedPlace.stay_night}</p>
                                                <div className="dst-btm">
                                                    <h6> Start From </h6>
                                                    <span>{selectedPlace.stay_price}</span>
                                                </div>
                                                <p className="sub-para">Per person on twin sharing</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Main;
