import FeedContainer from "./Components/Feed/FeedContainer";
import RecommendationInput from "./Components/Feed/RecommendationInput";
import AppContainer from "./Components/Layout/AppContainer";
import Navbar from "./Components/Navbar/Navbar";
import FeedList from "./Components/Feed/FeedList";
import Divider from "./Components/Layout/Divider";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <FeedContainer>
          <RecommendationInput />
          <Divider />
          <FeedList />
        </FeedContainer>
      </AppContainer>
    </div>
  );
}

export default App;
