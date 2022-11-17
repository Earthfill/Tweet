import React from "react";


const LikeButton = ({ count }) => {
    return (
        <span className="likebutton">
            <i className="fa fa-heart"/>
            <span className="like-count">
                {count > 0 ? count : null}
            </span>
        </span>
    );
}

export default LikeButton