import React, { useState } from 'react';

import "./css/style1.css"
import SignFormpatient from './SignFormpatient';
import SignFormdoctor from './SignFormdoctor';






function Signin() {

  // const [isShown, setIsShown] = useState(false);
  // const handleForm = event => {
  //     // 👇️ toggle shown state
  //     setIsShown(current => !current);

  //   };
  //   const [isVisible, setIsVisible] = useState(true);

  // const handleForm = event => {
  //   // 👇️ toggle visibility
  //   setIsVisible(current => !current);
  // };
  // function myFunction() {
  //   var x = document.getElementById("myDIV");
  //   if (x.style.display === "true") {
  //     x.style.display = "false";
  //   } else {
  //     x.style.display = "true";
  //   }

  // }

  // function myFunction2() {
  //   var y = document.getElementById("myDIV2");
  //   if (y.style.display === "none") {
  //     y.style.display = "block";
  //   } else {
  //     y.style.display = "none";
  //   }

  // }
  const [isHidden, setIsHidden] = useState(false);

  const handleHideClick = () => {
    setIsHidden(true);
  };

  const handleShowClick = () => {
    setIsHidden(false);
  };

  return (
    <>
      <div className="signup_form">
          <div className="container">
          <div className='section_divided'>
            <h1>Sign In</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            {/* <div className="S_button"><a href onClick={myFunction}>Signin For Patient</a></div>
            <div id="form" className="S_button"><a href onClick={myFunction2}>Signin For Doctor</a></div> */}

            <button id="show" className="buton1" onClick={handleShowClick}>Patient</button>
            <button id="hide" className="buton1" onClick={handleHideClick}>Doctor</button>

            <hr />
          </div>

          <p style={{ display: isHidden ? 'block' : 'none' }}> <SignFormdoctor /></p>
          <div style={{ display: isHidden ? 'none' : 'block' }}> <SignFormpatient />  </div>



        </div>
      </div>
    </>
  );
}
export default Signin;