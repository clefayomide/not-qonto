import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/pages/home"), {
	ssr: false,
});
export default function Home() {
	return <HomePage />;
}
