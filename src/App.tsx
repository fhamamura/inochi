import { useKeepAwake } from 'expo-keep-awake';
import Routes from "./routes";

function App() {
  useKeepAwake();
  return (
      <Routes />
  );
}

export default App;