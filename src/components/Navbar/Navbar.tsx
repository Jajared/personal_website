function Navbar() {
  return (
    <nav className="flex justify-end pr-10">
      <div>
        <img src={require("./profile-image.jpg")} alt="Profile" className="mt-2 rounded-full w-14 h-14" />
      </div>
    </nav>
  );
}

export default Navbar;
