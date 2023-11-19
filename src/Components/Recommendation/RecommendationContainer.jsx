import HeaderRow from "./HeaderRow";
import RecommendationText from "./RecommendationText";
import RecommendationAudio from "./RecommendationAudio";
import RecommendationLabels from "./RecommendationLabels";
import ActionList from "./ActionList";
import Divider from "../Layout/Divider";

const RecommendationContainer = (props) => {
  const { recommendation } = props;
  return (
    <div className="w-full lg:w-2/3 p-2 space-y-6 flex flex-col rounded-md">
      <HeaderRow recommendation={recommendation} />
      <RecommendationText recommendation={recommendation} />
      <div className="flex flex-row justify-between items-center">
        <RecommendationAudio />
        <RecommendationLabels recommendation={recommendation} />
      </div>
      <ActionList />
      <Divider />
    </div>
  );
};

export default RecommendationContainer;
