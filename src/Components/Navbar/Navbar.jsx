// Icon imports
import NoiseAwareIcon from "@mui/icons-material/NoiseAware";
import HouseIcon from "@mui/icons-material/House";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SortIcon from "@mui/icons-material/Sort";

// Component imports
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-900">
      <div className="px-32 flex flex-row justify-between">
        <NavButton>
          <NoiseAwareIcon fontSize="large" />
        </NavButton>
        <div className="flex flex-row justify-center">
          <NavButton>
            <HouseIcon fontSize="large" />
          </NavButton>
          <NavButton>
            <SearchIcon fontSize="large" />
          </NavButton>
          <NavButton>
            <AccountCircleIcon fontSize="large" />
          </NavButton>
        </div>
        <NavButton>
          <SortIcon fontSize="large" />
        </NavButton>
      </div>
    </div>
  );
};

export default Navbar;
