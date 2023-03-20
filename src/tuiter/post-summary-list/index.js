import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = (who) => {
    const postsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={who._id} post={post} />)
            }
        </ul>
    );
};
export default PostSummaryList;