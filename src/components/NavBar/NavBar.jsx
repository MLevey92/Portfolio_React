import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'

export default function NavBar() {
    const currentPage = useLocation().pathname;
    
    return (
        <div className="container-fluid navContainer">
            <div className="row">
                <div className="col-5">
                    <ul className="navLinks">
                        <li className="navLink"><Link to="/">Home</Link></li>
                        <li className="navLink"><Link to="/Portfolio">Portfolio</Link></li>
                        <li className="navLink"><Link to="/Resume">Resume</Link></li>
                        <li className="navLink"><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="col-7">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1>Mike Levey</h1>
                        </div>

                        <div className="col-sm-6">
                            <ul className="socialLinks">
                                <li className="socialLink"><Link to="https://github.com/MLevey92">Github</Link></li>
                                <li className="socialLink"><Link to="https://www.linkedin.com/in/mike-levey-87aaa9177/">Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}