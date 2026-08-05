import { ExternalLink } from "lucide-react";

export default function Footer(){

	return (

		<footer className="py-8 px-8">

			<div className="max-w-6xl mx-auto text-center text-gray-400">

				{/* Coding profiles moved to Skills section for a better UX */}

				<p>
					© {new Date().getFullYear()} Bandila Niharika. Built with React & passion for AI.
				</p>

			</div>

		</footer>

	);

}