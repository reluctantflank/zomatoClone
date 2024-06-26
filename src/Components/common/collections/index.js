/** @format */

import React from "react";
import "./collection.css";
import NextArrow from "../carousal/nextArrow";
import PrevArrow from "../carousal/prevArrow";
import Slider from "react-slick";

var settings = {
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

const Collection = ({ list }) => {
	return (
		<div className="collection-wrapper">
			<div className="collection max-width">
				<div className="collection-title">Collections</div>
				<div className="collection-subtitle-row">
					<div className="collection-subtitle-text">
						Explore curated lists of top restaurants, cafes, pubs, and bars in
						Lucknow, based on trends
					</div>
					<div className="collection-location">
						<div>All collections in Lucknow</div>
						<i
							className="fa-solid fa-caret-right absolute-center"
							style={{ marginLeft: "7px" }}
						/>
					</div>
				</div>
				<Slider {...settings}>
					{list.map((item) => (
						<div>
							<div className="collection-cover">
								<img
									src={item.cover}
									className="collection-image"
									alt={item.title}
								/>
								<div className="gradient-bg"></div>
								<div className="collection-card-title">{item.title}</div>
								<div className="collection-card-subtitle">
									<div>{item.places}</div>
									<i
										className="fa-solid fa-caret-right absolute-center"
										style={{ marginLeft: "7px" }}
									/>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Collection;
