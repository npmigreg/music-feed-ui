const RoundedAvatar = (props) => {
  const { imgUrl } = props;

  return <img className="w-10 h-10 rounded-full" src={imgUrl} alt="Avatar" />;
};

export default RoundedAvatar;
