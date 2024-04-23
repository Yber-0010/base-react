import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getContacts } from "../../../provider/product/getProduct"
import { MetaTags } from "../../helpers/MetaTags";
import { langContext } from "../../context/langContext";
import { FormattedMessage } from "react-intl";

export async function preloadContact() {
	const contacts = await getContacts()
	return { contacts }
}

export const Contact = ({ metaData }) => {

	const idioma = useContext(langContext)

	const navigate = useNavigate();
	const { contacts } = useLoaderData();

	const gotoindex = () => {
		navigate(-1)
	}

	const change = (lang) => {
		localStorage.setItem('lang', lang);
		idioma.establecerLenguaje(lang);
	}


	return (
		<>
			<MetaTags metaData={metaData} />


			<h1>
				<FormattedMessage
					id="contact"
					defaultMessage="Contact"
				/>
			</h1>


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
			<button
				type="button"
				onClick={() => change('en-US')}
			>
				en
			</button>
			<button
				type="button"
				onClick={() => change('es-ES')}
			>
				es
			</button>

		</>
	)
}
