import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Destination() {
    const [list, setList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:1338/api/data_list')
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);
    
    const press = (id) => {
        alert(`Button Pressed : ${id}`);
    }

    return (
        <>
            <section className="w3l-about-breadcrumb text-left">
                <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
                    <div className="container">
                        <h2 className="title">Destinations</h2>
                        <ul className="breadcrumbs-custom-path mt-2">
                            <li><a href="#url">Home</a></li>
                            <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Destinations </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="grids-1 py-5">
                <div className="grids py-lg-5 py-md-4">
                    <div className="container">
                        <h3 className="hny-title mb-5">Destinations</h3>
                        <div className="row">
                            {list.map((val, index) => (
                                <div className="col-lg-4 col-md-4 col-6" key={index}>
                                    <div className="column">
                                        <a href="#"><img src={`http://localhost:1338/imgupload/${val.img}`} alt={val.desti_name} className="img-fluid" /></a>
                                        <div className="info">
                                            <h4><a href="#">{val.desti_name}</a></h4>
                                            <p>{val.stay_night} Nights</p>
                                            <div className="dst-btm">
                                                <h6 className="">Start From</h6>
                                                <span>{val.stay_price}</span>
                                                <br></br>
                                                <button type="button" onClick={() => press(val.id)}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Destination;
