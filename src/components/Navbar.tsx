const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h2 className="text-xl">
          Doctor<span className="text-[#00856F] font-bold">Care</span>
        </h2>
      </div>
      <ul className="flex gap-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Info</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Doctors</a>
        </li>
      </ul>
      <button className="border-2 border-[#00856F] rounded-2xl px-6 py-0.5 uppercase text-[#00856F] font-bold">
        Register
      </button>
    </div>
  );
};

export default Navbar;
