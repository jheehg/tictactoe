import Layout from "./components/Layout/Layout";
import Players from "./components/Player/Players";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <Layout>
        <Players />
        <Container />
      </Layout>
    </div>
  );
}

export default App;
