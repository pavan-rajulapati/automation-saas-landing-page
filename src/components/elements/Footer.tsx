import Container from "../shared/Container"
import NavItem from "../shared/NavItem"
import { navItems } from "./Navbar"

const Footer = () => {
	return (
		<footer className="relative pt-28 rounded-t-3xl bg-box">
			<Container className="pb-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center gap-3 mb-4 md:0">
						<img src="assets/logoo.png" alt="Logo"
							className="w-full h-8"
						/>
						<span className="text-lg font-semibold text-heading-1">Cloud</span>
					</div>

					<ul className="flex gap-6 text-heading-1">
						{navItems.map((item, key) => (
							<NavItem key={key} href={item.href} text={item.text} />
						))}
					</ul>
				</div>
			</Container>
		</footer>
	)
}

export default Footer