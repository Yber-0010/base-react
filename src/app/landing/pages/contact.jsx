import { useLoaderData } from "react-router-dom";
import { getContacts } from "../../../provider/product/getProduct"

export async function preloadContact() {
    const contacts = await getContacts()
    return { contacts }
}

export const Contact = () => {

    const { contacts } = useLoaderData();
    console.log(contacts)

    return (
        <div>Contact</div>
    )
}
