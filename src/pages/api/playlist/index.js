import yourShows from "./data";

const GET = (_, res) => {
	return res.status(200).json(yourShows);
};

export default GET;
