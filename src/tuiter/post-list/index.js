import React from "react";

import PostItem from "./post-item";
import postsList from "./posts.json"

const PostList = () => {
    return (
        <ul className="list-group">
            {postsList.map(post => <PostItem key={post._id} post={post} />)}
        </ul>
    )
}

export default PostList;