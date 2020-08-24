import React from "react"
// import ReactDom from "react-dom";

function MyInfo(props){

    return(
        
          <div>
                <img src = {props.imgUrl}/>
                <h4>{props.name}</h4>
                <p>color:{props.color}</p>
          </div> 
          
       
    )
}

export default MyInfo

// <div className="contact-card">
// <img src={props.imgUrl} />
// <h3>{props.name}</h3>
// <p>phone:{props.phone}</p>
// <p>Email:{props.email}</p>
// <p>Age:{props.age}</p>
// </div>

// function Contact(props){
//     console.log(props)
//     return(
//     <div className="contact-card">
//         <img src={props.imgUrl} />
//         <h3>{props.name}</h3>
//         <p>phone:{props.phone}</p>
//         <p>Email:{props.email}</p>
//         <p>Age:{props.age}</p>
//     </div>
//     )