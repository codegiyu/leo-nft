import React from "react";
import * as classes from "../styles/TeamCardstyle.module.scss";

const TeamCard = ({ props }) => {
    let { name, division, image, height = "90%" } = props;

    return (
        <div className={classes.teamCard}>
            <div className={classes.imgContainer}>
                <img src={image} alt="name" style={{ height }} />
                <div className={classes.ellipse}></div>
            </div>
            <div className={classes.captionsContainer}>
                <p className={classes.name}>{name}</p>
                <p className={classes.division}>{division}</p>
            </div>
        </div>
    );
};

export default TeamCard;
