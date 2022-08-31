import React from "react";



function MainContext(props){ 
    return(
    <section className='Blog-Post'>
        <img src={props.imageUrl} alt="Mount fiji" />
        <div className="text">
            <p className="location">{props.location} <a href={props.map} target="_blank">View on Google Maps</a></p>
            <h2>{props.title}</h2>
            <p className="startDate">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
        </div>
  </section>
    )
}

export default MainContext