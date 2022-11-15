import React from "react";
import Avatar from "./Avatar";
import LikeButton from "./LikeButton";
import Message from "./Message";
import MoreOptionsButton from "./MoreOptionsButton";
import NameWithHandle from "./NameWithHandle";
import ReplyButton from "./ReplyButton";
import RetweetButton from "./RetweetButton";
import Time from "./Time";

const Tweet = () => {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle /><Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

export default Tweet