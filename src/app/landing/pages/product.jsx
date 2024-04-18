import { Form, useLoaderData } from "react-router-dom";

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

export const Product = () => {
  const { params } = useLoaderData();
  console.log( 'params', params )

  return (
    <div>
      <br />
      <p>
        product
      </p>
    </div>
  )
}
