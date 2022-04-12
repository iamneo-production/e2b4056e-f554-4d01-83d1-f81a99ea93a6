import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Auth_Service from '../../services/Auth_Service'
import Course_Service from '../../services/Course_Service'


function CourseGrid({ name, desc, dur, courseId }) {
    const navigate = useNavigate()
    const { instituteId } = useParams()
    const [role, setRole] = useState(null)

    useEffect(() => {
        const role = Auth_Service.getCurrentUser().roles[0]
        setRole(role)
    }, [])


    const handleDelete = (id) => {
        Course_Service.deleteCourse(id)
            .then((response) => {

            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <>
            <center>
                <Card style={{ width: '45rem' }} >
                    <Card.Body style={{ fontWeight: '600' }}>
                        <Card.Title style={{ marginBottom: '0.5rem', fontWeight: '800' }}>{name}</Card.Title>
                        <div className="data" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', flex: '1', }}>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flex: '1' }}>
                                <div className="duration">
                                    <Card.Text style={{ color: '#000' }}>
                                        <span style={{ color: '#8B008B' }}>Couse Duration : </span>{dur}.
                                    </Card.Text>
                                </div>
                                
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flex: '1' }}>
                               
                                <div className="description">
                                    <Card.Text style={{ color: '#000', textAlign: 'left' }}>
                                        <span style={{ color: '#8B008B' }}>Course Description : </span>{desc}.
                                    </Card.Text>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </center>
        </>
    )
}

export default CourseGrid