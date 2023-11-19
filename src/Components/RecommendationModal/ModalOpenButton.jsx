const ModalOpenButton = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        document.getElementById("recommendation_modal").showModal()
      }
    >
      Recommend Music
    </button>
  );
};

export default ModalOpenButton;
