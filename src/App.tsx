import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate } from "react-router";
import { darkTheme, GlobalStyle, lightTheme } from "./theme/theme";

import "antd/dist/antd.css";
import AppLayout from "./components/layout/AppLayout";
import Home from "./Views/Home";
import Update from "./Views/Update";
import Error from "./Views/Error";

function App() {
  //in later versions a light mode functionality could be added
  const [lightMode, setLightMode] = useState(true);
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person/:id" element={<Update />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
