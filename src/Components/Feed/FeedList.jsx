import { returnMockPosts } from "./returnMockPosts";
import { useEffect, useState } from "react";
import RecommendationContainer from "../Recommendation/RecommendationContainer";

const FeedList = () => {
  const [recommendations, setRecommendations] = useState();

  useEffect(() => {
    const initialRecommendations = returnMockPosts();

    setRecommendations(initialRecommendations);
  }, [setRecommendations]);

  return (
    recommendations &&
    recommendations.map((r) => {
      return <RecommendationContainer key={r.id} recommendation={r} />;
    })
  );
};

export default FeedList;
