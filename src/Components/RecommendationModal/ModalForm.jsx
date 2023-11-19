import TextInput from "./TextInput";
import TextArea from "./TextArea";
import LabelDropdown from "./LabelDropdown";

const ModalForm = () => {
  return (
    <div className="w-full space-y-2">
      <TextInput />
      <TextArea />
      <LabelDropdown />
    </div>
  );
};

export default ModalForm;
