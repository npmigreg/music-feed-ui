const RecommendationLabels = (props) => {
  const { recommendation } = props;

  return (
    <div className="flex flex-row space-x-1">
      {recommendation.labels &&
        recommendation.labels.forEach((label) => {
          return (
            <div key={label} className="badge badge-outline">
              {label}
            </div>
          );
        })}
    </div>
  );
};

export default RecommendationLabels;
