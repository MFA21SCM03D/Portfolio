import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./NavBar.css";

const navigationItems = [
	{ to: "/", label: "Home", end: true },
	{ to: "/skills", label: "Skills" },
	{ to: "/projects", label: "Projects" },
	{ to: "/resume", label: "Resume" },
	{ to: "/contact", label: "Contact" },
];

function Navbar() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [location.pathname]);

	return (
		<nav
			className='navbar'
			aria-label='Primary navigation'>
			<ul className='navbar_pages'>
				{navigationItems.map(({ to, label, end }) => (
					<li
						className='navbar_pages_item'
						key={to}>
						<NavLink
							to={to}
							end={end}
							className={({ isActive }) =>
								`navbar_pages_link ${isActive ? "current" : ""}`
							}>
							{label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
