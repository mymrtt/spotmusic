import jumpBackIn from "./data";

const GET = async (_, res) => {
	res.status(200).json(jumpBackIn);
};
export default GET;
