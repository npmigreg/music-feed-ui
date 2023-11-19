const TextArea = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your bio</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder="Bio"
      ></textarea>
      <label className="label">
        <span className="label-text-alt">Your bio</span>
        <span className="label-text-alt">Alt label</span>
      </label>
    </div>
  );
};

export default TextArea;
