import Grid from "./Components/Grid";
import './css/app.css'

function App() {
  const SIZE = 4;
  return (
    <div className="App">
        <Grid size={SIZE}/>
    </div>
  );
}

export default App;
