const RecommendationText = (props) => {
  const { recommendation } = props;

  return <p className="text-sm">{recommendation.postText}</p>;
};

export default RecommendationText;
