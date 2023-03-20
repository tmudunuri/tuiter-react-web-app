import React from "react";

const PostItem = ({ post }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-circle" src={`/images/${post.avatar}`} width="50px" height="50px" alt="user_profile" />
                </div>

                <div className="col-11 ps-4">
                    <div className="fw-bolder">
                        {post.retweeted_by ?
                            <div>
                                <i className="fa-solid fa-retweet"></i>
                                <span className="text-secondary ps-2 small pt-2">{post.retweeted_by} Retweeted</span>
                            </div>
                            : ""}
                    </div>
                    <div className="fw-bolder">
                        {post.username} <i className="fa-solid fa-circle-check text-primary pe-1 small"></i>
                        <span className="text-secondary fw-normal">@{post.handle} · {post.time}</span>
                        <i class="fa-solid fa-ellipsis-h pe-2 float-end pt-2 tuit-gray"></i>
                    </div>

                    <div className="mb-2">{post.message}</div>

                    <div className="border border-light rounded">
                        <img className="rounded" src={`/images/${post.image}`} width="100%" alt="post_image" />

                        {post.title ?
                            <div className="ps-2 pt-2">{post.title}</div>
                            : ""}

                        {post.body ?
                            <div className="text-secondary ps-2">{post.body}</div>
                            : ""}

                        {post.link ?
                            <div className="text-secondary ps-2 pb-2">
                                <i className="bi bi-link-45deg"></i> {post.link}</div>
                            : ""}

                    </div>

                    <div className="row text-secondary my-3">
                        <div className="col">
                            <i className="fa-regular fa-comment pe-3"></i>{post.comment}
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-retweet pe-3"></i>{post.retweet}
                        </div>
                        <div className="col">
                            <i className="fa-regular fa-heart pe-3"></i>{post.like}
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-arrow-up-from-bracket pe-3"></i>
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
}

export default PostItem;