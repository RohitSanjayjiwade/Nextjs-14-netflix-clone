import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import Navbar from "../components/Navbar";


export default async function HomePage() {
	const session = await getServerSession(authOptions);
	return (
		
		<Navbar />
	);
}