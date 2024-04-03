/** @format */

import React from "react";
import "./deliveryCollections.css";
import NextArrow from "../../common/carousal/nextArrow";
import PrevArrow from "../../common/carousal/prevArrow";
import Slider from "react-slick";
import DeliveryItems from "./deliveryItem";

const deliveryItems = [
	{
		id: 1,
		title: "Pizza",
		cover:
			"https://b.zmtcdn.com/data/pictures/chains/3/19056943/06029b048ef65a9180d3ab70f50c3f19.jpg?fit=around|960:500&crop=960:500;*,*",
	},
	{
		id: 2,
		title: "Burger",
		cover:
			"https://b.zmtcdn.com/data/pictures/chains/3/102003/24a2eedf96d1916fa57d8fc8d1579a27.jpg",
	},
	{
		id: 3,
		title: "Rolls",
		cover:
			"https://b.zmtcdn.com/data/pictures/chains/5/19174765/6c950719525b9a09132719f594b15853.jpg",
	},
	{
		id: 4,
		title: "Cake",
		cover:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkukgpI8TBJcutKUfhYzEe_liYXM5oyVHq_g&usqp=CAU",
	},
	{
		id: 5,
		title: "Biryani",
		cover:
			"https://b.zmtcdn.com/data/pictures/0/19470170/5a1034a8a2e6ac2ee2d9509b21470a23_o2_featured_v2.jpg",
	},
	{
		id: 6,
		title: "Chaat",
		cover:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_31FlXXddGXu9pWQMZXxpFyMFu_So3Amj5A&usqp=CAU",
	},
	{
		id: 7,
		title: "Momos",
		cover:
			"https://b.zmtcdn.com/data/pictures/1/18739011/978ed1e998518948130ab1062407cf95.jpg",
	},
	{
		id: 8,
		title: "Paneer",
		cover:
			"https://b.zmtcdn.com/data/dish_photos/2d0/1524288c05067440461bea9585ce32d0.jpg",
	},
	{
		id: 9,
		title: "Samosa",
		cover:
			"https://b.zmtcdn.com/data/pictures/chains/3/20200423/e7cf16d0a9b162b3b17d131e382c07de.jpg?fit=around|960:500&crop=960:500;*,*",
	},
	{
		id: 10,
		title: "Paratha",
		cover:
			"https://b.zmtcdn.com/data/pictures/9/19276959/97b53a4ae43dcb54ec69057007ab7247.jpg",
	},
	{
		id: 11,
		title: "Pastry",
		cover:
			"https://b.zmtcdn.com/data/pictures/chains/7/19161937/f552f64bae36f9ebc5904a8aa11a4c4f.jpeg?fit=around|960:500&crop=960:500;*,*",
	},
];

var settings = {
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
	return (
		<div className="delivery-collections">
			<div className="max-width">
				<div className="collection-title">Eat what makes you happy</div>
				<Slider {...settings}>
					{deliveryItems.map((item) => {
						return <DeliveryItems item={item} />;
					})}
				</Slider>
			</div>
		</div>
	);
};

export default DeliveryCollections;
