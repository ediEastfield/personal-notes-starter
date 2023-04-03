import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

function NoteApp() {
    return (
        <div>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="*" />
            </Routes>
          </main>
        </div>
      );
}

export default NoteApp;