import { useLoaderData } from "react-router-dom";
import { MetaTags } from "../../helpers/MetaTags";

export async function loaderProduct({ params }) {
	const id = params.id;
	if (id === "2") {
		throw new Response("", {
			status: 404,
			statusText: "Not Found",
		});
	}
	return { params };
}

export const Product = ({ metaData }) => {
	const { params } = useLoaderData();
	console.log('params', params)

	return (
		<>
			<MetaTags metaData={metaData} />
			<br />
			<p>
				product
			</p>
		</>
	)
}
