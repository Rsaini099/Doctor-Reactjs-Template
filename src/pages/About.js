// @@include('header.htm')
// @@include('blocks/navigation.htm')
// @@include('blocks/page-title.htm', {
// "title": "About Us",
// "description": "About Us"
// })
import React from 'react';
import Award from './Award';
import Team from './Team';
function About() {
    return (
        <>
        <div className="page-title bg-1">
  <div className="overlay"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">About Us</span>
          <h1 className="text-capitalize mb-5 text-lg">About Us</h1>

          {/* <ul className="list-inline breadcumb-nav">
            <li className="list-inline-item"><a href="index.html" className="text-white">Home</a></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><a href="#" className="text-white-50">@@description</a></li>
          </ul>  */}
        </div>
      </div>
    </div>
  </div>
</div>
            <div className="section about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className="title-color">Personal care for your healthy living</h2>
                        </div>
                        <div className="col-lg-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.</p>
                            <img src="images/about/sign.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="fetaure-page ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="images/about/about-1.jpg" alt="" className="img-fluid w-100"/>
                                    <h4 className="mt-3">Healthcare for Kids</h4>
                                    <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="images/about/about-2.jpg" alt="" className="img-fluid w-100"/>
                                    <h4 className="mt-3">Medical Counseling</h4>
                                    <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item mb-5 mb-lg-0">
                                <img src="images/about/about-3.jpg" alt="" className="img-fluid w-100"/>
                                    <h4 className="mt-3">Modern Equipments</h4>
                                    <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-block-item">
                                <img src="images/about/about-4.jpg" alt="" className="img-fluid w-100"/>
                                    <h4 className="mt-3">Qualified Doctors</h4>
                                    <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Award/>
            <Team/>

        </>
    );
}
export default About;
