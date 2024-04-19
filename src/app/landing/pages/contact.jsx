import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getContacts } from "../../../provider/product/getProduct"
import { MetaTags } from "../../helpers/MetaTags";

export async function preloadContact() {
	const contacts = await getContacts()
	return { contacts }
}

export const Contact = ({ metaData }) => {
	const navigate = useNavigate();
	const { contacts } = useLoaderData();
	console.log(contacts)

	const gotoindex = () => {
		navigate(-1)
	}


	return (
		<>
			<MetaTags metaData={metaData} />
			<div>Contact</div>
			<Link to={'/'}>
				<button>
					link
				</button>
			</Link>
			<button
				type="button"
				onClick={() => gotoindex()}
			>
				Cancel
			</button>

		</>
	)
}
