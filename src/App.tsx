import { useEffect } from "react";
import Router from "./shared/Router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);
  return <Router />;
};

export default App;
