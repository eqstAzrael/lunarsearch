import './Header.css'
import userLogo from '../assets/user.png'
import menuLogo from '../assets/menu.png'
import searchLogo from '../assets/search.png'

function Header() {
    return (  
        <header className='header'>
            <div className='logo'>
                <img src={menuLogo} width='70px' height='70px'/>
                <h1>LunarSearch</h1>
                <div className="logo-panel">
                    <a href="#">Home</a>
                    <a href="#">Movies</a>
                    <a href="#">TV Series</a>
                    <a href="#">New Releases</a>
                    <a href="#">Top Rated</a>
                    <a href="#">Genres</a>
                    <a href="#">My Watchlist</a>
                </div>
            </div>
            
            <div className='nav'>
                <div className="search-container">
                    <input type="text" id="input" placeholder="Enter movie title..."/>
                    <img src={searchLogo} className="search-icon"/>
                </div>
                <p className='reg'> Sign In </p>
                <div className="user-icon-container">
                    <img src={userLogo} width='50px' height='50px'/>
                    <div className="user-menu">
                        <a href="#">Settings</a>
                        <a href="#">My Tier List</a>
                        <a href="#">Log Out</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;