import { Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "../../ui";
import { DcPage, MarvelPage,SearchPage, HeroPage } from "../../heroes";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/search" element={<SearchPage />} />

          <Route path="/heropage" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
