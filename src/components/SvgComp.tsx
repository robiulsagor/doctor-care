interface SvgCompProps {
  onClick?: () => void;
  invert?: boolean;
  isMenuOpen?: boolean;
  path?: string;
}

const SvgComp: React.FC<SvgCompProps> = ({
  onClick,
  invert,
  isMenuOpen,
  path,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-6 h-6 lg:hidden cursor-pointer ${
        invert ? "fill-white " : "fill-black"
      } ${isMenuOpen && "mr-3"}`}
      onClick={onClick}
    >
      <path
        d={path}
        stroke={invert ? "white" : "#00856f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SvgComp;
