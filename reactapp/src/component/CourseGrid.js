import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function CourseGrid({ name,duration,timing,nos,description,userType }) {
    
        
        if(userType == 1){
            const navigate = useNavigate();
            return (
                <div className="" style={{marginTop:'1rem'}}>
                    <center>
                    <Card style={{ width: '45rem'}} >
                    <Card.Body style={{fontWeight:'600'}}>
                        <Card.Title style={{marginBottom:'1rem',fontWeight:'800'}}>{name}</Card.Title>
                        <div className="data" style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'flex-start',flex:'1', }}>

                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'center',flex:'1'}}>
                            <div className="duration">
                                <Card.Text style={{ color: '#000'}}>
                                    <span style={{ color: '#8B008B'}}>Couse Duration : </span>{duration}.
                                </Card.Text>
                            </div>
                            <div className="timings">
                                <Card.Text style={{ color: '#000'}}>
                                    <span style={{ color: '#8B008B'}}>Course Available Timings : </span>{timing}.
                                </Card.Text>
                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start',justifyContent:'center', flex:'1'}}>
                            <div className="nos">
                                <Card.Text style={{ color: '#000'}}>
                                    <span style={{ color: '#8B008B'}}>Number of Students : </span>{nos}.
                                </Card.Text>
                            </div>
                            <div className="description">
                                <Card.Text style={{color: '#000',textAlign:'left'}}>
                                    <span style={{ color: '#8B008B'}}>Course description : </span>{description}.
                                </Card.Text>
                            </div> 
                        </div>

                        </div>
                        
                        <Button onClick={() => navigate(`/enrollcourse`)} variant="info" className="float-right" id ="editCourse" style={{margin:'1rem'}}>Edit Course</Button>
                        <Button onClick={() => navigate(`/enrollcourse`)} variant="danger" className="float-right" id ="deleteCourse" style={{margin:'1rem'}}>Delete Course</Button>
                        

                    </Card.Body>
                    </Card>
                    </center>
                </div>

            )
        } else if (userType == 2) {
            const navigate = useNavigate();
            return (
                <div className="" style={{marginTop:'2rem'}}>
                    <center>
                    <Card style={{ width: '45rem'}} >
                    <Card.Body style={{fontWeight:'600'}}>
                        <Card.Title style={{marginBottom:'1rem',fontWeight:'800'}}>{name}</Card.Title>
                        <div className="data" style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'flex-start',flex:'1', }}>

                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent:'center',flex:'1'}}>
                            <div className="duration">
                                <Card.Text style={{ color: '#000'}}>
                                    <span style={{ color: '#8B008B'}}>Couse Duration : </span>{duration}.
                                </Card.Text>
                            </div>
                            <div className="timings">
                                <Card.Text style={{ color: '#000'}}>
                                    <span style={{ color: '#8B008B'}}>Course Available Timings : </span>{timing}.
                                </Card.Text>
                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start',justifyContent:'center', flex:'1'}}>
                            <div className="nos">
                                <Card.Text style={{ color: '#000'}}>
                                    <span style={{ color: '#8B008B'}}>Number of Students : </span>{nos}.
                                </Card.Text>
                            </div>
                            <div className="description">
                                <Card.Text style={{color: '#000',textAlign:'left'}}>
                                    <span style={{ color: '#8B008B'}}>Course description : </span>{description}.
                                </Card.Text>
                            </div> 
                        </div>

                        </div>
                        
                        <Button onClick={() => navigate(`/enrollcourse`)} variant="success" className="float-right" style={{marginTop:'1rem'}}>Enroll Course</Button>
                    </Card.Body>
                    </Card>
                    </center>
                </div>

            )
        }
    
}






export default CourseGrid