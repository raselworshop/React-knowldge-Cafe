import PropTypes from "prop-types";
import Bookmark from "../Bookmarkk/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-2 mt-2 p-4">
            <h2 className="text-3xl text-center">Book Marks blog:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => (<Bookmark key={idx} bookmark={bookmark}></Bookmark>))
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Bookmarks;