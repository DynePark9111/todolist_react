import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { themeContext } from "./Contexts/themeContext";
import { themeColors } from "./Data/data";
import Home from "./Pages/Home";
import styles from "./Styles/App.module.scss";

function App() {
  const { theme } = useContext(themeContext);
  return (
    <div className={styles.App} style={{ background: themeColors[theme] }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
