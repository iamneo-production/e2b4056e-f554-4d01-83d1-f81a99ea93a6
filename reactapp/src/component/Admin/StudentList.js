import React, { useEffect, useState } from 'react'
import Student_Service from '../../services/Student_Service'
import AdminNavbar from './AdminNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const StudentList = () => {

    const [students, setStudents] = useState([])

    const listStudents = () => {
        Student_Service.getAllStudents()
            .then((response) => {
                console.log(response.data)
                setStudents(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handleDelete = (id) => {
        Student_Service.delete(id)
            .then(() => {
                listStudents()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        listStudents()
    }, [])

    return (
        <>
            <AdminNavbar />
            <div className=''>
                <table className="table table-striped mx-auto bg-light w-75 mt-4">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th> Student Id</th>
                            <th> Student Name</th>
                            <th> Student Email</th>
                            <th> Enrolled Course</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(
                                student =>
                                    <tr key={student.admissionid}>
                                        <td> {student.studentid}</td>
                                        <td> {student.studentname}</td>
                                        <td> {student.email}</td>
                                        <td> {student.courses[0].courseName}</td>
                                        <td> <button className='btn btn-danger' onClick={() => handleDelete(student.studentid)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StudentList