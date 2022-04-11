import React from 'react'
//import icon from '../image/rates1.png'
function Dcard(props) {


    return (
        <div className="card stretched-link">
            <img src={props.icon} className="card-img-top img-fluid img-thumbnail rounded" alt="..."></img>
            <div className="card-body">
                <h6 className="card-text" style={{ textAlign: "center", color: "black" }}>{props.name}</h6>
                <div className="row">
                    <div className="col-sm ">
                        <p style={{ fontSize: "12px", color: "black" }}>{props.address}</p>
                    </div>
                    <div className="col-sm">
                        <p style={{ fontSize: "12px", color: "black", marginRight: "0.2rem" }}>{props.email}</p>
                        <p style={{ fontSize: "12px", color: "black" }}>{props.mobno}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dcard