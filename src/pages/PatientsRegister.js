// import React from "react";
import React, { useEffect, useState } from 'react'
// import AdBlock from "../Component/AdBlock";
import { useLocation } from 'react-router-dom';
function PatientsRegister() {
  const userdata = useLocation();
  const queryParams = new URLSearchParams(userdata.search);
  // const userid = queryParams.get("id");
  const fullname = queryParams.get("fullname");



  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost/doctor_admin/New/Api/patientsregister.php")
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result);
        }
      )
  }, [])

  return (
    <div>
      <div className="sidebar">
        <div className="Text_div">Dashboard

          <div>
            {/* {item.map(item => (
              <p>
                {item.fullname}
                </p>
              ))}
 */}
            <input className="table_username" value={fullname} disabled="true" ></input>


          </div>


        </div>
        <hr style={{ border: '2px solid green', width: '50%' }} />
        <a className="active" href="#home">Available Doctors</a>
        <a href="#news">Accepted Appointments</a>
        <a href="#contact">Feedback</a>
       
      </div>
      <div className="content_bar">
        <h2>Available Doctors</h2>

        {/* <div>
          <AdBlock />
        </div> */}
        <div className='table_design'>
          <table border={'2px solid #000'}>
            <thead>
              <tr>
                <th>ID</th>
                <th>fullname</th>
                <th>email</th>
                <th>mobile</th>
                <th>gender</th>
                <th>age</th>
                <th>service</th>
                <th>address</th>
                <th>city</th>
                <th>state</th>
                <th>pincode</th>
                <th>Book Appointment</th>

              </tr>
            </thead>

            <tbody>
              {item.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>{item.service}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.pincode}</td>
                  <td>{<button className="btn btn-danger">Book Appointment</button>}</td>
                  

                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  );
}
export default PatientsRegister;