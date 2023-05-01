import React from "react";
import { Link } from "react-router-dom";

function Appointment() {
    return (
        <>
        <section className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">Book your Seat</span>
          <h1 className="text-capitalize mb-5 text-lg">Appointment</h1>

          {/* <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">Book your Seat</a></li>
          </ul>  */}
        </div>
      </div>
    </div>
  </div>
</section>
            <section className="appoinment section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mt-3">
                                <div className="feature-icon mb-3">
                                    <i className="icofont-support text-lg"></i>
                                </div>
                                <span className="h3">Call for an Emergency Service!</span>
                                <h2 className="text-color mt-3">+84 789 1256 </h2>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                                <h2 className="mb-2 title-color">Book an appointment</h2>
                                <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                                <form id="#" className="appoinment-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>Choose Department</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect2">
                                                    <option>Select Doctors</option>
                                                    <option>Software Design</option>
                                                    <option>Development cycle</option>
                                                    <option>Software Development</option>
                                                    <option>Maintenance</option>
                                                    <option>Process Query</option>
                                                    <option>Cost and Duration</option>
                                                    <option>Modal Delivery</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="date" id="date" type="date" className="form-control" placeholder="dd/mm/yyyy"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="time" id="time" type="time" className="form-control" placeholder="Time"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Full Name"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="tel" maxlength="11" className="form-control" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group-2 mb-4">
                                        <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                                    </div>

                                    <Link to="/confirmation" className="btn btn-main btn-round-full" >Make Appoinment<i className="icofont-simple-right ml-2"></i></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
          
        </section>

        </>
    );
}
export default Appointment;