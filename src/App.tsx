import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
  const [alertVisible,  setAlertVisiblity] = useState(false);


  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>My alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisiblity(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App; 