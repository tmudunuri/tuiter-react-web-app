import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group mb-2">
            ${exploreItems.map(post => {
        return (PostSummaryItem(post));
    }).join('')}
        </ul>
    `)
}

export default PostSummaryList;