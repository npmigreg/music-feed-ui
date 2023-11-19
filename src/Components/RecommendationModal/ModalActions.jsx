import ModalPostButton from "./ModalPostButton";
import ModalCloseButton from "./ModalCloseButton";

const ModalActions = () => {
  return (
    <div className="flex flex-row space-x-1 justify-end">
      <ModalPostButton />
      <ModalCloseButton />
    </div>
  );
};

export default ModalActions;
