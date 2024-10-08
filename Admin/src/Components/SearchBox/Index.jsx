import { IoSearch } from "react-icons/io5";

function SearchBox (){

    return(<>
    <div className="searchBox position-relative d-flex align-items-center">
    <IoSearch /><input type="text" placeholder="Serach here"/>
        
    </div>
    </>)
};

export default SearchBox;