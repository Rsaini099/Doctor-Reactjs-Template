import React, { useState, useEffect } from 'react'
// import styles from "./abc.css";

const AdBlock = () => {
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
                            
                       
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
    )
}

export default AdBlock; 