import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Student_Service from '../../services/Student_Service'
import AdminNavbar from './AdminNavbar'
const StudentDetails = () => {
    const { admissionid } = useParams()
    const [student, setStudent] = useState([])


    useEffect(() => {
        Student_Service.getStudentbyId(admissionid)
            .then((response) => {
                console.log(response.data)
                setStudent(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])


    return (
        <>
            <AdminNavbar />
            <div className='container-sm bg-dark mt-3 p-2 mb-3'>
                <h4 className='text-light text-center border-bottom border-light pb-1'>General Information</h4>
                <table className='table table-dark table-sm' style={{ marginBottom: "0.5rem" }}>
                    <tbody>
                        <tr>
                            <th width="30%">Name</th>
                            <td width="2%">:</td>
                            <td>{student.studentname}</td>
                        </tr>
                        <tr>
                            <th width="30%">Father Name</th>
                            <td width="2%">:</td>
                            <td>{student.fathersname}</td>
                        </tr>
                        <tr>
                            <th width="30%">Mother Name</th>
                            <td width="2%">:</td>
                            <td>{student.mothersname}</td>
                        </tr>
                        <tr>
                            <th width="30%">Student Id</th>
                            <td width="2%">:</td>
                            <td>{student.studentid}</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className='text-light text-center border-bottom border-light pb-1'>Contact Information</h4>
                <table className='table table-dark table-sm' style={{ marginBottom: "0.5rem" }}>
                    <tbody>
                        <tr>
                            <th width="30%">Email Id</th>
                            <td width="2%">:</td>
                            <td>{student.email}</td>
                        </tr>
                        <tr>
                            <th width="30%">Phone Number</th>
                            <td width="2%">:</td>
                            <td>{student.phonenumber}</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className='text-light text-center border-bottom border-light pb-1'>Address Information</h4>
                <table className='table table-dark table-sm' style={{ marginBottom: "0.5rem" }}>
                    <tbody>
                        <tr>
                            <th width="30%">Address</th>
                            <td width="2%">:</td>
                            <td>{student.address}</td>
                        </tr>
                        <tr>
                            <th width="30%">Nationality</th>
                            <td width="2%">:</td>
                            <td>{student.nationality}</td>
                        </tr>
                        <tr>
                            <th width="30%">State</th>
                            <td width="2%">:</td>
                            <td>{student.state}</td>
                        </tr>
                        <tr>
                            <th width="30%">Pincode</th>
                            <td width="2%">:</td>
                            <td>{student.pincode}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StudentDetails