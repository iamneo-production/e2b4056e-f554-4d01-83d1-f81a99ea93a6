import React, { useState, useEffect } from 'react'
import Academy_Service from '../../services/Academy_Service'
import AcademyCard from './AcademyCard'
import { faTrash, faPenToSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
const AcademyList = (props) => {
    const [academies, setAcademies] = useState([])

    const filteredData = academies.filter((academy) => {
        //console.log(props)
        if (props.inp === "") {
            return academy;
        } else {
            return academy.instituteName.toLowerCase().includes(props.inp);
        }
    });

    const listAcademies = () => {
        Academy_Service.get()
            .then(response => {
                //console.log(response.data)
                setAcademies(response.data)
            })
            .catch(error => {
                console.log("Something went wrong " + error)
            })
    }
    useEffect(() => {
        listAcademies()
        //console.log("Filtered Data = " + filteredData)
    }, [])

    const handleDelete = (id) => {
        Academy_Service.delete(id)
            .then((response) => {
                listAcademies()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <div className="row justify-content-md-center">
                {
                    filteredData.map(academy => (
                        <div className="card col col-lg-2 p-2 mx-3 mb-3" id="userAcademyGrid1" key={academy.instituteId}>
                            <AcademyCard name={academy.instituteName} address={academy.instituteAddress} icon={academy.img_url} email={academy.email} mobno={academy.mobile} />
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-info">
                                    <NavLink className="link-dark" to={`/edit-academy/${academy.instituteId}`}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </NavLink>
                                </button>
                                <button className='btn btn-danger' onClick={() => handleDelete(academy.instituteId)}><FontAwesomeIcon icon={faTrash} /></button>
                                <button className='btn btn-success' >
                                    <NavLink className="link-light" to={`/academy/${academy.instituteId}/courses`}>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AcademyList