import { MetaTags } from "../../../helpers/MetaTags"
import { UiPrimaryButton } from './../../../ui/buttons/uiPrimaryButton';

export const Home = ({ metaData }) => {

	return (
		<>
			<MetaTags metaData={metaData} />
			<h4>Home</h4>
			<UiPrimaryButton />
		</>
	)
}

export default Home
