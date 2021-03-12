import {Link} from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="heroAbout">


<div className="page-title-area ptb-100">
<div className="container">
<div className="page-title-content">
<h1>Contact Us</h1>
<ul>
<li className="item"><a href="index.html">Home</a></li>
<li className="item"><a href="login.html"><i className='bx bx-chevrons-right'></i>Contact</a></li>
</ul>
</div>
</div>
<div className="bg-image">
<img src="assets/img/page-title-area/contact.jpg" alt="demo"/>
</div>
</div>


<div className="contact-section">
<div className="container">
<div className="main-form ptb-100">
<form id="contactForm">
<h3 className="sub-title">Contact Us</h3>
<div className="row">
<div className="col-md-6">
<div className="form-group">
<div className="input-icon"><i className='bx bx-user'></i></div>
<input type="text" name="name" className="form-control" id="name" required="" 
data-error="Please enter your name" placeholder="Name" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<div className="input-icon"><i className='bx bx-at'></i></div>
<input type="email" name="email" className="form-control" id="email" required="" data-error="Please enter your email" placeholder="Email" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<div className="input-icon"><i className='bx bx-comment-detail'></i></div>
<input type="text" name="subject" className="form-control" id="subject" required="" data-error="Please enter subject" placeholder="Subject" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<div className="input-icon textarea"><i className='bx bx-envelope'></i></div>
<textarea name="message" id="message" className="form-control" 
cols="100" rows="6" required="" data-error="Please enter your message" placeholder="Message..."></textarea>
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-lg-12">
<button type="submit" className="btn-primary">send message</button>
<div id="msgSubmit" className="h5 text-center hidden"></div>
</div>
</div>
</form>
</div>
</div>
<div className="contact-footer bg-light">
<div className="container-fluid p-0">
<div className="row">
<div className="col-lg-5">
<div className="content pt-100 pb-70 ">
<div className="info-content">
<h3 className="sub-title">London Office</h3>
<div className="content-list">
<i className='bx bx-map'></i>
<h6>6B High way, 21th Street, London</h6>
</div>
<div className="content-list">
<i className='bx bx-phone'></i>
<h6>Phone: +123 456 987</h6>
</div>
<div className="content-list">
<i className='bx bx-receipt'></i>
<h6>Fax: +0123 456 000</h6>
</div>
<div className="content-list">
<i className='bx bx-at'></i>
<h6>Email: <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2842495d465c6841464e47064b4745">[email&#160;protected]</a></h6>
</div>
</div>
<div className="info-content">
<h3 className="sub-title">Usa Office</h3>
<div className="content-list">
<i className='bx bx-map'></i>
<h6>6B State Street, Santa Barbara, CA, USA</h6>
</div>
<div className="content-list">
<i className='bx bx-phone'></i>
<h6>Phone: +123 456 987</h6>
</div>
<div className="content-list">
<i className='bx bx-receipt'></i>
<h6>Fax: +0123 456 000</h6>
</div>
<div className="content-list">
<i className='bx bx-at'></i>
<h6>Email: <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a2c8c3d7ccd6e2cbccc4cd8cc1cdcf">[email&#160;protected]</a></h6>
</div>
</div>
</div>
</div>
<div className="col-lg-7">
<div className="contact-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.5587057831294!2d-119.6913566850266!3d34.41256088050952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9138c16678b21%3A0x224a2a07bdf0842a!2s6%20State%20St%2C%20Santa%20Barbara%2C%20CA%2093101%2C%20USA!5e0!3m2!1sen!2sbd!4v1603126591259!5m2!1sen!2sbd"></iframe> </div>
</div>
</div>
</div>
</div>
</div>

    </section>
  );
}
