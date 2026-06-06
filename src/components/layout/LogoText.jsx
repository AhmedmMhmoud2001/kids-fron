const LogoText = ({ className = '', inheritSize = false }) => (
  <span className={`${inheritSize ? 'text-inherit' : 'text-[1.65rem]'} font-bold leading-none tracking-tight ${className}`}>
    <span className="text-[#63adfc]">K</span>
    <span className="text-gray-900">i</span>
    <span className="text-gray-900">d</span>
    <span className="text-[#63adfc]">s</span>
    <span className="text-gray-900"> & </span>
    <span className="text-[#ff92a5]">C</span>
    <span className="text-gray-900">o.</span>
  </span>
);

export default LogoText;
