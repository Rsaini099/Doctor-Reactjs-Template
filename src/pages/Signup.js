import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import "./css/style1.css"
import SignupDoctor from './SignupDoctor';
import SignupPatients from './SignupPatients';

function Signup() {
    // const navigate = useNavigate();
    // const signupPPage = useCallback(()=>{
    //     navigate("/signuppatients")
    //   },[navigate]);
    //   const signupDPage = useCallback(()=>{
    //     navigate("/signupdoctor")
    //   },[navigate]);
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
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <button id="show" className="buton1 heading_center" onClick={handleShowClick}>Patient</button>
                        <button id="hide" className="buton1 heading_center" onClick={handleHideClick}>Doctor</button>

                        {/* <button onClick={signupPPage}>Signup For Patient</button>
       <button onClick={signupDPage}>Signup For Doctor</button> */}
                    </div>
                    <p style={{ display: isHidden ? 'block' : 'none' }}> <SignupDoctor /></p>
                    <div style={{ display: isHidden ? 'none' : 'block' }}> <SignupPatients />  </div>
                </div>
            </div>


        </>
    );
}
export default Signup;