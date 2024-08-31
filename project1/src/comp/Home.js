import React from 'react';
import Axios from 'axios';

function Home() {
    
    function submitdata(){
    var Name = document.getElementById('Name').value;
    var Email = document.getElementById('Email').value;

    Axios.post('http://localhost:1337/api/insert',{name:Name,email:Email,}).then((response)=>{
        alert('Success');
        console.log(response);
    })
    }
    
    return (
        <>
        <h1>me ghar pe hun</h1>
        <div>
        <label>Name</label>
        <input type = 'text' id = 'Name' placeholder='Name'></input>
        </div>
        <div>
        <label>Email</label>
        <input type = 'email' id = 'Email' placeholder='Email'></input>
        </div>
        <button onClick={submitdata}>Submit</button>
                
        </>
    );
}

export default Home;
