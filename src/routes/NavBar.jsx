import { Link, Outlet } from "react-router-dom";
import { useSearch } from "../context/SearchContext";



function NavBar() {
  const {search, setSearch} = useSearch();
  return (
    <div>
      <header>
        <div className="nav_div">
          <p>DEV@Deakin</p>
          <input type="search" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search..." value={search} />
          
          <div className="nav_but">
            <Link to="/">
            <img src="./images/home.png" alt="Home icon"></img>
            </Link>
            <Link to="/find-question">
            <button>Find Question</button>
            </Link>
            <Link to="/post">
            <button>Post</button>
            </Link>
            <Link to="/login">            
            <div>
            <img className="profile-pic" src="./images/profile_pic.jpg" alt="Profile Pic"></img>
            <h6>Sign in</h6>
            </div>
            </Link>
          </div>
        </div>
      </header>
        <Outlet/>
    </div>
  );
}

export default NavBar;