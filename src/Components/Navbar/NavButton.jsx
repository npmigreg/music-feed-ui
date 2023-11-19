const NavButton = ({ children }) => {
  return (
    <div className="py-4 px-8 rounded-md hover:bg-slate-800 hover:cursor-pointer">
      {children}
    </div>
  );
};

export default NavButton;
