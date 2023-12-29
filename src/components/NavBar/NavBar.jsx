import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import './NavBar.css'

function Navbar () {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0,0);
    }, [location.pathname])
    
    
    const getNavClass = () => {
        switch (location.pathname) {
            case '/':
                return "pages_item_home";        
            case '/skills':
                return "pages_item_skills";        
            case '/projects':
                return "pages_item_projects";        
            case '/resume':
                return "pages_item_resume";        
            case '/contact':
                return "pages_item_contact";        
            default:
                return "pages_item_home";
        }
    }

    const currentnavClass = getNavClass();

    const isCurrentPage = (navClass) => {
        return navClass === currentnavClass;
    }

    const renderNavLink = (to, navClass, navName) => {
        const currentPage = isCurrentPage(navClass);
        const linkClass = currentPage ? 'navbar_pages_item current' : 'navbar_pages_item';
        return (
            <li className={linkClass} key={to}>
                <Link to={to} aria-current= {currentPage ? 'page' : undefined}>{navName}</Link>
            </li>
        )
    }

  return (
    <nav className={`navbar`}>
        <ul className="navbar_pages">
            {renderNavLink("/", "pages_item_home", "Home")}
            {renderNavLink("/skills", "pages_item_skills", "Skills")}
            {renderNavLink("/projects", "pages_item_projects", "Projects")}
            {renderNavLink("/resume", "pages_item_resume", "Resume")}
            {renderNavLink("/contact", "pages_item_contact", "Contact")}
        </ul>
    </nav>
  )
}

export default Navbar