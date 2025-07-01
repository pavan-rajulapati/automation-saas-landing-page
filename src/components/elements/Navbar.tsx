import { useThemeStore } from "../../store/ThemeStore";
import Button from "../shared/BtnLink";
import Container from "../shared/Container";
import NavItem from "../shared/NavItem";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export const navItems = [
	{ href: "#", text: "Home" },
	{ href: "#services", text: "Services" },
	{ href: "#about-us", text: "About Us" },
	{ href: "#pricing", text: "Pricing" },
];

const Navbar = () => {
	const {toggleTheme, theme} = useThemeStore()

	return (
		<header className="absolute inset-x-0 top-0 z-50 py-3">
			<Container>
				<nav className="w-full flex justify-between gap-6 relative">
					{/* Logo */}
					<div className="min-w-max inline-flex relative">
						<a href="/" className="relative flex items-center gap-3">
							<img
								src="assets/logo.png"
								alt="logo"
								className="w-22 h-10 object-scale-down border-white"
							/>
						</a>
					</div>

					<div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
						<ul className="border-t border-box-border lg:border-t-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
							{navItems.map((item, key) => (
								<NavItem href={item.href} text={item.text} key={key} />
							))}
						</ul>
						<div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
							<Button text="Get Start" href="#"></Button>
						</div>
					</div>

					<div className="min-w-max flex items-center gap-x-3">
						<button onClick={toggleTheme} className="outline-hidden flex relative text-heading-2 rounded-full p-1 lg:py-2.5 px-2.5 border border-box-border cursor-pointer">
							{theme === "dark" ? (
								<span><CiLight /></span>	
							) : (
								<span><CiDark /></span>	
							)}
						</button>
					</div>
				</nav>
			</Container>
		</header>
	);
};

export default Navbar;
