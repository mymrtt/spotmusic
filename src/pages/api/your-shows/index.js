import recommended from "./data";

const GET = (_, res) => {
	return res.status(200).json(recommended);
};

export default GET;
