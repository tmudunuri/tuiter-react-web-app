import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
            <div class="row">
                <div class="col-10">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" />
                        <span class="position-absolute" style="bottom: 7px; left: 15px"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
                <div class="col-2 m-auto">
                    <a href="#"><i class="fa-solid fa-cog fa-2x pt-1"></i></a>
                </div>
           </div>
           
           <ul class="nav my-2 nav-tabs">
               <li class="nav-item">
                  <a class="nav-link bg-primary" aria-current="page" href="#">For You</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Sports</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-md-block">Entertainment</a>
                </li>
           </ul>
           
           <div class="position-relative">
               <img class="mb-2" src="../../images/starship.png" width="100%" />
               <h2 class="text-white position-absolute bottom-0">SpaceX's Starship</h2>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;