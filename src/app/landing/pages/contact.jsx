import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getContacts } from "../../../provider/product/getProduct"

export async function preloadContact() {
    const contacts = await getContacts()
    return { contacts }
}

export const Contact = () => {
    const navigate = useNavigate();
    const { contacts } = useLoaderData();
    console.log(contacts)

    const gotoindex = () => {
        navigate(-1)
    }


    return (
        <>
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
