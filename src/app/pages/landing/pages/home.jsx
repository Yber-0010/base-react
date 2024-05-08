import { Button } from "@mui/material"
import { MetaTags } from "../../../helpers/MetaTags"


export const Home = ({ metaData }) => {

	return (
		<>
			<MetaTags metaData={metaData} />
			<h4>Home</h4>
			<Button variant="contained">Hello world</Button>
		</>
	)
}

export default Home
