import Posts from "components/Post/Posts";
import "components/style/App.css";

const App = () => {
  return (
    // provide React Query client to App
    <div className="App">
      <h1>Blog Posts</h1>
      <Posts />
    </div>
  );
};

export default App;
