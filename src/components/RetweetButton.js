import React from "react";

const RetweetButton = ({ count }) => {
    return (
        <span className="retweetbutton">
            <i className="fa fa-retweet"/>
            {getRetweetCount(count)}
        </span>
    );
}

const getRetweetCount = (count) => {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

export default RetweetButton