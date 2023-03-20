import { useSelector } from "react-redux";

import TuitItem from "./tuit-item";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits);

    return (
        <ul className="list-group">
            {tuits.map(tuit => <TuitItem tuit={tuit} key={tuit._id} />)}
        </ul>
    )
}

export default TuitsList;