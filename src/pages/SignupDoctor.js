import React from "react"
import "./css/style1.css"

function SignupDoctor() {
    return (
        <>
            

                <h2 className="heading_center">Doctor Signup Form</h2>





                <form className="modal-content" method="POST" action="http://localhost/doctor_admin/New/Api/signupdoctor.php">
                    <div className="container">
                        
                    <hr />
                        <label htmlFor="text"><b>Doctor Name</b></label>
                        <input type="text" placeholder="Enter Doctor Name" name="fullname" required />

                        <label htmlFor="email"><b>Email Address</b></label>
                        <input type="text" placeholder="Enter Email Address" name="email" required />

                        <label htmlFor="text"><b>Mobile Number</b></label>
                        <input type="text" placeholder="Enter Mobile Number" name="mobile" required />

                        {/* <label htmlFor="text"><b>Gender</b></label><br />
                        <input type="radio" id="html" name="gender" value="Male" />&nbsp;
                        <label htmlFor="html">Male</label>&nbsp;&nbsp;
                        <input type="radio" id="css" name="gender" value="Female" />&nbsp;
                        <label htmlFor="css">Female</label>&nbsp;&nbsp;

                        <input type="radio" id="javascript" name="gender" value="Other" />&nbsp;
                        <label htmlFor="javascript">Other</label><br /> */}
                        <label htmlFor="text"><b>Gender</b></label><br />
                        <select name="service" id="gender">
                            <option name="service">Select</option>
                            <option name="service">Male</option>
                            <option name="service">Female</option>
                            
                        </select><br />

                        <label htmlFor="text"><b>Age </b></label><br />
                        {/* <input type="radio" id="age2" name="age" value="18 - 39" />&nbsp;
                        <label htmlFor="age2">18 - 54</label>&nbsp;&nbsp;
                        <input type="radio" id="age3" name="age" value="40+" />&nbsp;
                        <label htmlFor="age3">55+</label><br /> */}
                        <select name="service" id="service">
                            <option name="service">Select</option>
                            <option name="service">20-30</option>
                            <option name="service">31-40</option>
                            <option name="service">41-50</option>
                            <option name="service">51+</option>
                        </select>

                        {/* <label htmlFor="text"><b>Choose a Service:</b></label>&nbsp;&nbsp;
                        <select name="service" id="service">
                            <option name="service">Select</option>
                            <option name="service">Service 1</option>
                            <option name="service">Service 2</option>
                            <option name="service">Service 3</option>
                            <option name="service">Service 4</option>
                        </select><br /> */}

                        <label htmlFor="text"><b>Specialization</b></label>
                        <input type="text" placeholder="Enter Specialization" name="address" required />

                        <label htmlFor="text"><b>City</b></label>
                        <input type="text" placeholder="Enter Your City" name="city" required />

                        <label htmlFor="text"><b>State</b></label>
                        <input type="text" placeholder="Enter Your State" name="state" required />

                        <label htmlFor="text"><b>Pincode</b></label>
                        <input type="text" placeholder="Enter Your Pincode" name="pincode" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="rpassword" required />

                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>

                        <p>By creating an account you agree to our Terms & Privacy.</p>

                        <div className="clearfix">

                            <button type="submit" name="submit" className="signupbtn buton1">Sign Up</button>
                        </div>
                    </div>
                </form>
           




        </>
    );
}
export default SignupDoctor;