import RoundedAvatar from "../Layout/RoundedAvatar";

const HeaderRow = (props) => {
  const { recommendation } = props;

  return (
    <div className="flex justify-between">
      <div className="flex flex-row space-x-3 items-center">
        <RoundedAvatar imgUrl={recommendation.avatarUrl} />
        <p className="text-sm">
          {`${recommendation.username} recommended ${recommendation.song} by ${recommendation.artist}`}
        </p>
      </div>
      <p className="text-sm">{recommendation.timeSincePost}</p>
    </div>
  );
};

export default HeaderRow;
