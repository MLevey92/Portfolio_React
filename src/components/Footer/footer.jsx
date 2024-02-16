import { Link, useLocation } from 'react-router-dom';
import './footer.css'

export default function Footer () {
    return (
        <div className="footerContainer">
        <ul className="socialLinks">
            <li className="socialLink"><Link to="https://github.com/MLevey92">Github</Link></li>
            <li className="socialLink"><Link to="https://www.linkedin.com/in/mike-levey-87aaa9177/">Linkedin</Link></li>
        </ul>
        </div>
    );
}