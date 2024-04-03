/** @format */

import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousal/nextArrow";
import PrevArrow from "../../common/carousal/prevArrow";
import Slider from "react-slick";

const topBrandsList = [
	{
		id: 1,
		time: "26 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png",
		name: "Domino's Pizza",
	},
	{
		id: 2,
		time: "26 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png",
		name: "KFC",
	},
	{
		id: 3,
		time: "23 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
		name: "La Pino's Pizza",
	},
	{
		id: 4,
		time: "21 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520868.png",
		name: "Subway",
	},
	{
		id: 5,
		time: "28 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
		name: "Pizza Hut",
	},
	{
		id: 6,
		time: "24 min",
		cover:
			"https://mapandfire.com/wp-content/uploads/2022/09/mcdonalds-brand-logo.jpg",
		name: "Mcdonald's",
	},
	{
		id: 7,
		time: "27 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
		name: "Burger King",
	},
	{
		id: 8,
		time: "23 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png",
		name: "Roll King",
	},
	{
		id: 9,
		time: "22 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/7fdbbe0f4f0aff0bb3775f3ac819ecb0_1638424082.png",
		name: "Biryani Blue",
	},
	{
		id: 10,
		time: "25 min",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/194e35f28f89595d3d226f2e9c97095d_1701928182.png",
		name: "The Belgian Waffle Co.",
	},
];

var settings = {
	infinite: false,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

const TopBrands = () => {
	return (
		<div className="top-brands max-width">
			<div className="collection-title">Top brands for you</div>
			<Slider {...settings}>
				{topBrandsList.map((brand) => {
					return (
						<div>
							<div className="top-brands-cover">
								<img
									src={brand.cover}
									className="top-brands-image"
									alt={brand.name}
								/>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default TopBrands;
