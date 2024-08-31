import React from 'react';
import Axios from "axios";
import Swal from 'sweetalert2';

function Login() {
  const Login_data = (event) => {
    event.preventDefault(); // Ensure this is within the event handler

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    Axios.post('http://localhost:1338/api/data_verify', { email, password })
      .then((response) => {
        if (response.data.message) {
          Swal.fire({
            title: 'Incorrect',
            text: response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          }).then(() => {
            window.location = "/login";
          });
        } else {
          let obj={sname:response.data[0].name,uemail:email}
          localStorage.setItem('mydata',JSON.stringify(obj));

          Swal.fire({
            title: 'Correct',
            text: 'Welcome  ' + response.data[0].name,
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            window.location = "/";
          });
        }
      })
      .catch((error) => {
        console.error("There was an error logging in!", error);
      });
  }

  return (
    <>
      <section className="w3l-about-breadcrumb text-left">
        <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
          <div className="container py-2">
            <h2 className="title">Login</h2>
            <ul className="breadcrumbs-custom-path mt-2">
              <li><a href="/">Home</a></li>
              <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> Login </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w3l-contact" id="contact">
        <div className="contact-infubd py-5">
          <div className="container py-lg-3">
            <div className="contact-grids row">
              <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
                <form onSubmit={Login_data} className="signin-form">
                  <div className="input-grids">
                    <div className="form-group">
                      <input type="text" id="email" placeholder="Your Email*" className="contact-input" required />
                    </div>
                    <div className="form-group">
                      <input type="password" id="password" placeholder="Your password*" className="contact-input" required />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-style btn-primary">Login</button>
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

export default Login;
