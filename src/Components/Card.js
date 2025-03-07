import "./Cards.css"
import {React,useState,useEffect} from "react";

export function Card(props)
{
    const[info,setInfo] = useState({name:"", price:0.0});

    useEffect(()=>{setInfo({name:props.name,price:props.price,text1:props.text1,text2:props.text2,text3:props.text3,text4:props.text4})},[1]);

    return <div id="main">
        <p className="card-header">{info.name}</p>
        <div className="price-container">
            <p className="card-price">${info.price}</p>
        </div>
        <ul className="card-features">
            <li>{info.text1}</li>
            <li>{info.text2}</li>
            <li>{info.text3}</li>
            <li>{info.text4}</li>
        </ul>
        <button className="card-button">SELECT PACKAGE</button>
    </div>
}