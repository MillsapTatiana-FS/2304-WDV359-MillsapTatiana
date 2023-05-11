import { useEffect }  from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;

};

function App() {
  return (
    <div className="app">
      
    </div>
  );
}

export default App;
