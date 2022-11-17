import React from "react";
import Avatar from "./Avatar";
import LikeButton from "./LikeButton";
import Message from "./Message";
import MoreOptionsButton from "./MoreOptionsButton";
import NameWithHandle from "./NameWithHandle";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import Time from "./Time";

const Tweet = ({ tweet }) => {
    return (
        <div className="tweet">
            <Avatar hash={testTweet.gravatar} />
            <div className="content">
                <NameWithHandle author={testTweet.author} />
                <Time time={testTweet.timestamp} />
                <Message text={testTweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={testTweet.retweets}/>
                    <LikeButton count={testTweet.likes}/>
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

var testTweet = {
    message: "Something about cats.",
    gravatar: "nothing",
    author: {
        handle: "@catperson",
        name: "IAMA Cat Person"
    },
    likes: 5,
    retweets: 2,
    timestamp: "2016-07-30 21:24:37"
};    

export default Tweet
