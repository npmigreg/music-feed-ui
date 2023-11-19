import ModalContainer from "../RecommendationModal/ModalContainer";
import ModalOpenButton from "../RecommendationModal/ModalOpenButton";

const RecommendationInput = () => {
  return (
    <div className="w-full md:w-2/3 flex flex-row justify-center items-center p-4 rounded-md my-4">
      <ModalContainer>
        <ModalOpenButton />
      </ModalContainer>
    </div>
  );
};

export default RecommendationInput;
