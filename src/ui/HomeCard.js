import React from 'react';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4" style={{paddingTop: '9px'}}>
        <div className="card col-lg-9" ><br></br>
            <img alt={props.img} className="card-img-top rounded mx-auto d-block" src={props.img}></img>
           <div className="card-block"  >
                <p  className="card-text">{props.text}</p>
                <button style     = {{backgroundColor: '#4abdac', border: '#E0F8F7' }} className="btn btn-primary" 
                 onClick={props.action}>{props.title} </button>
            </div>
            <br></br>
        </div>
    </div>
);

export default HomeCard;
