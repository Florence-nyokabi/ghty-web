import React from "react";
import { PiPlantFill } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { MdLocalShipping } from "react-icons/md";

import './style.css'


let info =[
    {icons:<PiPlantFill/>,title:"Harvest",
     content:"From harvest to export, we proudly deliver the finest coffee beans through a meticulous, selective process. Each year, we hand-pick the best beans, expertly process and grade them, and package with care, ensuring they meet international standards. Our premium beans are shipped globally, offering a truly exceptional coffee experience. Contact us today to explore our world-class offerings."},
    {icons:<VscServerProcess/>,title:"Process",
     content:"From the vibrant coffee plantations, our skilled harvesters hand-pick only the ripest cherries during the annual harvest. Each bean then embarks on a journey of expert processing, grading, and sorting, ensuring unmatched quality. Carefully packed to preserve their distinct flavors, our premium beans are ready for global export, adhering to the highest international standards."},
    {icons:<MdLocalShipping/>,title:"Ship",
    content:"After meticulous processing and packing for ultimate freshness, our exceptional beans embark on a swift, secure journey to destinations worldwide. We ensure careful handling and timely delivery, so you receive coffee beans of unparalleled quality and richness. Elevate your coffee experience with every sip—anticipate our expertly curated shipments and savor the passion infused in each cup."}
]

const Mission = () =>{
    return(
        <section id="mission-section">
        <div id="mission-header">
            <h1>Transform your International trade with G.H.T.Y Trading PLC</h1>
           <p>We bring Ethiopian coffee to life, blending sustainability, community empowerment, and rich flavors to create a symphony of quality in every cup.</p> 
        </div>
        
        <div id="content" >
            {
                 info.map((item,index)=>(
                    <div key={index} id="blueContainer">
                        <i id="icon">{item.icons}</i>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                </div>
                ))
            }   
        </div>
    </section>
)}
export default Mission;