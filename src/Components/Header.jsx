import {Link} from 'react-router-dom' 

function Header() {
    return (
        <div>
            <div className="NavBar">
                <Link to='/'><p>Home</p></Link>
                <Link to='/BrothersPizza'><p className='BrothersPizza'>Brother's Pizza</p></Link>
                <Link to='/SouthernMaid'><p className='SouthernMaid'>Southern Maid</p></Link>
                <Link to='/SenorBurrito'><p className='SenorBurrito'>Senor Burrito</p></Link>
            </div>
            <h1>Hwy 6 Plaza</h1>
        </div>
    );
}
export default Header;