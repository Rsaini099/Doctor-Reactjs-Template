import React from "react";

function SignFormpatient() {
    return (
        <>
        <h2 className="heading_center">Patient's Login Form</h2>
        

            <form id="signformP" className="modal-content animate" action="http://localhost/doctor_admin/New/Api/signinpatients.php" method="POST">
                <div className="container">
                    
                    <div className="imgcontainer">

                        <img src="/images/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>


                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />


                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label><br/>
                    <button className="buton1" name="submit" type="submit">Login</button>


                    {/* <div className="container" >
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> */}
                </div>
            </form>
        </>
    );
}
export default SignFormpatient;