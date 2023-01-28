import React from "react";
import * as classes from "../styles/NFTSamplestyle.module.scss";
import triangle from "../images/triangle.svg";
import solana from "../images/solana.svg";
import leopard from "../images/leopard.png";


const NFTSample = ({props}) => {
    let {pic = false} = props

    return (
        <div className={classes.sampleBox}>
            <div className={classes.triangle}>
                <img src={triangle} alt="triangle" />
            </div>
            <img src={leopard} alt="leopard" className={classes.leopard} />
            { pic
            ?   <img src={solana} alt="solana" className={classes.solana}/>
            : null
            }
        </div>
    )
}

export default NFTSample