import {Link} from 'react-router-dom' 

function Header() {
    return (
        <div>
            <div className="NavBar">
                <Link to='/BrothersPizza'><p>Brother's Pizza</p></Link>
                <Link to='/SouthernMaid'><p>Southern Maid</p></Link>
                <Link to='/SenorBurrito'><p>Senor Burrito</p></Link>
            </div>
            <h1>Hwy 6 Plaza</h1>
        </div>
    );
}
export default Header;