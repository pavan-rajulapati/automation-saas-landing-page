
interface NavItemProps {
    href : string;
    text : string
}

const NavItem = ({href, text} : NavItemProps) => {
  return (
    <li>
        <a href={href} className="duration-300 font-medium ease-linear hover:text-cyan-500 py-3 px-1">
            {text}
        </a>
    </li>
  )
}

export default NavItem