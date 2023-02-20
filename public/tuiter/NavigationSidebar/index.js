const NavigationSidebar = (active) => {
    return (`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item ${active === "home" ? "bg-primary" : ''}" href="../HomeScreen/index.html">
                <i class="fa-solid fa-house-chimney pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a class="list-group-item ${active === "explore" ? "bg-primary" : ''}" href="../ExploreScreen/index.html">
                <i class="fa-solid fa-hashtag pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a class="list-group-item ${active === "notification" ? "bg-primary" : ''}" href="#">
                <i class="fa-solid fa-bell pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a class="list-group-item ${active === "message" ? "bg-primary" : ''}" href="#">
                <i class="fa-solid fa-envelope pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a class="list-group-item ${active === "bookmark" ? "bg-primary" : ''}" href="#">
                <i class="fa-solid fa-bookmark pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a class="list-group-item ${active === "list" ? "bg-primary" : ''}" href="#">
                <i class="fa-solid fa-list-ul pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a class="list-group-item ${active === "profile" ? "bg-primary" : ''}" href="#">
                <i class="fa-solid fa-user pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a class="list-group-item ${active === "more" ? "bg-primary" : ''}" href="#">
                <i class="fa-solid fa-circle pe-2 float-start pt-1"></i>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;