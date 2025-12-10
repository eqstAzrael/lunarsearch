import './Header.css'
import userLogo from '../assets/user.png'

function Header() {
    return (  
        <header className='header'>
            <h1>LunarSearch</h1>
            <input type="text" id="input" placeholder="Enter movie title..."/>
            <div className='registration'>
                <p className='reg'> Sign In </p>
                <img src={userLogo} width='50px' height='50px'/>
            </div>
        </header>
    );
}

export default Header;