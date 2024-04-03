/** @format */

import React from "react";
import "./nightLife.css";
import { nightLife } from "../../data/nightLife";
import Collection from "../common/collections";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";

const nightlifeFilters = [
	{
		id: 1,
		icon: <i className="fa-solid fa-filter absolute-center"></i>,
		title: "Filters",
	},
	{
		id: 2,
		title: "Rating: 4.0+",
	},
	{
		id: 3,
		title: "Pubs & Bars",
	},
	{
		id: 4,
		icon: <i className="fa-solid fa-crown absolute-center"></i>,
		title: "Gold",
	},
];

const collectionList = [
	{
		id: 1,
		title: "Best in Lucknow",
		cover:
			"https://b.zmtcdn.com/data/collections/6948e10ce27646f868e3e72bc238259f_1709811534.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "28 Places",
	},
	{
		id: 2,
		title: "Dine For The Gram",
		cover:
			"https://b.zmtcdn.com/data/collections/3599408f7ccbdec96994908711a48a77_1709811824.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "7 Places",
	},
	{
		id: 3,
		title: "The Legends of Lucknow",
		cover:
			"https://b.zmtcdn.com/data/collections/1aab6777bf22e82144a7f48e4a75355e_1706256566.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "12 Places",
	},
	{
		id: 4,
		title: "What A View",
		cover:
			"https://b.zmtcdn.com/data/collections/a4df5a3ec8e72872a727945f3bcec59a_1709810699.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "8 Places",
	},
	{
		id: 5,
		title: "Pizza On My Mind",
		cover:
			"https://b.zmtcdn.com/data/collections/4549e973b0cdef037a96ef4ebd5dfbed_1707387644.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "6 Places",
	},
	{
		id: 6,
		title: "Go For Kebabs",
		cover:
			"https://b.zmtcdn.com/data/collections/410cc5af788aae9e95d0f90de12bff86_1709814010.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "5 Places",
	},
	{
		id: 7,
		title: "On A Sweet Note",
		cover:
			"https://b.zmtcdn.com/data/collections/ca03a3b5223d8dd4906e5e84277e0d8d_1688043267.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "6 Places",
	},
	{
		id: 8,
		title: "Quick Coffee Run",
		cover:
			"https://b.zmtcdn.com/data/collections/f65437aeaf44529464018c0ac1f8bff8_1709814264.png?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*",
		places: "12 Places",
	},
];

const nightList = nightLife;

const NightLife = () => {
	return (
		<div>
			<Collection list={collectionList} />
			<div className="max-width ">
				<Filters filterList={nightlifeFilters} />
			</div>
			<ExploreSection
				list={nightList}
				collectionName="NightLife Restaurants in Lucknow"
			/>
		</div>
	);
};

export default NightLife;
