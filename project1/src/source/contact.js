import React from 'react';

function Contact(){
    return  (
        <>
        <section class="w3l-about-breadcrumb text-left">
    <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
      <div class="container py-2">
        <h2 class="title">Contact Us</h2>
        <ul class="breadcrumbs-custom-path mt-2">
          <li><a href="#url">Home</a></li>
          <li class="active"><span class="fa fa-arrow-right mx-2" aria-hidden="true"></span> Contact </li>
        </ul>
      </div>
    </div>
  </section>
<section class="w3l-contact" id="contact">
  <div class="contact-infubd py-5"/>
    <div class="container py-lg-3">
      <div class="contact-grids row">
        <div class="col-lg-6 contact-left">
          <div class="partners">
            <div class="cont-details">
              <h5>Get in touch</h5>
              <p class="mt-3 mb-4">Hi there, We are available 24/7 by fax, e-mail or by phone. Drop us line so we can talk
                futher about that.</p>
            </div>
            <div class="hours">
              <h6 class="mt-4">Email:</h6>
              <p> <a href="mailto:mail@traversal.com">
                mail@traversal.com</a></p>
              <h6 class="mt-4">Visit Us:</h6>
              <p> 78-80 Upper St Giles St. Norwich NR2 1LT United Kingdom.</p>
              <h6 class="mt-4">Contact:</h6>
              <p class="margin-top"><a href="tel:+44-255-366-88">+44-255-366-88</a></p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 contact-right">
          <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="signin-form">
            <div class="input-grids">
              <div class="form-group">
                <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*" class="contact-input" />
              </div>
              <div class="form-group">
                <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*" class="contact-input" required="" />
              </div>
              <div class="form-group">
                <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*" class="contact-input" />
              </div>
            </div>
            <div class="form-group">
              <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*" required=""></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-style btn-primary">Send Message</button>
            </div>
          </form>
        </div>

      </div>
     
    </div>
</section>
        
        </>
    )
    
}
export default Contact;