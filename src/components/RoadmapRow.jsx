import React from "react";
import * as classes from "../styles/RoadmapRowstyle.module.scss";

const RoadmapRow = ({ props }) => {
    let { pic, num, text, text2 = "" } = props;

    return (
        <div className={classes.rowWrap}>
            <div>
                <img src={pic} alt={`phase-${num}`} />
            </div>
            <div>
                <p className={classes.phase}>{num}</p>
            </div>
            <div>
                <p>{text}</p>
                {text2 ? <p className={classes.secondLine}>{text2}</p> : null}
            </div>
        </div>
    );
};

export default RoadmapRow;
