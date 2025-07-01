interface ButtonLinkProps {
  text: string;
  href: string;
  className?: string;
}

const BtnLink = ({ text, href, className = "" }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`px-4 py-1 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${className}`}
    >
      <span className="relative z-10 tracking-wider text-white">{text}</span> 
    </a>
  );
};

export default BtnLink;
