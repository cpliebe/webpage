import React from 'react';
import brady from "./images/brady.png"
import judge from "./images/aaronjudge.png"
import bryce from "./images/bryceharper.png"
import {CardGroup} from "react-bootstrap";

const MLB = () => {
    return ( <div>
        <CardGroup>
 <div class="card">
    
            <img src = {judge}></img>
            <div class="container">
                <h4><b>Aaron Judge</b></h4>
                <p>Outfielder</p>
                <p>New York Yankees</p>
            </div>
        </div>
        <div class="card">
            <img src = {judge}></img>
            <div class="container">
                <h4><b>Aaron Judge</b></h4>
                <p>Outfielder</p>
                <p>New York Yankees</p>
            </div>
        </div> <div class="card">
            <img src = {judge}></img>
            <div class="container">
                <h4><b>Aaron Judge</b></h4>
                <p>Outfielder</p>
                <p>New York Yankees</p>
            </div>
        </div> 
        </CardGroup>
         </div>);

}
 
export default MLB;