import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";

const ActionList = () => {
  return (
    <div className="flex flex-row justify-left space-x-3">
      <ChatIcon fontSize="small" />
      <GroupIcon fontSize="small" />
    </div>
  );
};

export default ActionList;
