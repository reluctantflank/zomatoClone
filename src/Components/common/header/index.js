/** @format */

import React from "react";
import "./header.css";

const Header = () => {
	return (
		<div className="max-width header">
			<img
				src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
				alt="zomato-logo"
				className="header-logo"
			/>
			<div className="header-right">
				<div className="header-location-search-container">
					<div className="location-wrapper">
						<div className="location-icon-name">
							<i className="fa-solid fa-location-dot absolute-center location-icon" />
							<div>Lucknow, India</div>
						</div>
						<i className="fa-solid fa-caret-down absolute-center" />
					</div>
					<div className="location-search-sepertor"></div>
					<div className="header-searchBar">
						<i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
						<input
							placeholder="Search for restaurant, cuisine or a dish"
							className="search-input"
						/>
					</div>
				</div>
				<div className="profile-wrapper">
					<img
						src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
						alt="profile"
						className="header-profile-img"
					/>
					<span className="header-username">Amaan</span>
					<i className="fa-solid fa-angle-down absolute-center profile-options-icon"></i>
				</div>
			</div>
		</div>
	);
};

export default Header;
