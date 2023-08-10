import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {Link, navigate} from "gatsby";
import MenuIcon from "@assets/svg/menu.inline.svg";
import XMarkIcon from "@assets/svg/x-mark.inline.svg";

import * as styles from "./style.module.scss";

function useOutsideAlerter(ref) {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setMenuOpen(false);
			}

			console.dir(event.target);
			if (ref.current && event.target.localName === "a") {
				navigate(event.target.pathname);
				setMenuOpen(false);
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return {menuOpen, setMenuOpen};
}

export const Navigation = () => {
	const wrapperRef = useRef(null);
	const {menuOpen, setMenuOpen} = useOutsideAlerter(wrapperRef);

	return (
		<nav className={styles.navbar} ref={wrapperRef}>
			<Link to="/">Home</Link>
			<div className={styles.icon}>
				<input
					type="checkbox"
					className={styles.burgerCheck}
					checked={menuOpen}
					onChange={() => setMenuOpen((prev) => !prev)}
				/>
				<MenuIcon className={styles.menuIcon} />
				<XMarkIcon className={styles.xMarkIcon} />
				<div className={styles.menu}>
					<Link to="/images">Images</Link>
					<Link to="/svgs">SVGs</Link>
					<Link to="/videos">Videos</Link>
					<Link to="/documents">Documents</Link>
					<Link to="/markdown">Markdown</Link>
					<Link to="/models">3D Models</Link>
				</div>
			</div>
		</nav>
	);
};
