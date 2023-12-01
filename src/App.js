import { Route, Routes } from "react-router-dom";
import CustomLink from "./components/CustomLink/CustomLink";
import Layout from "./components/Layout/Layout";
import Hadits from "./pages/Hadits";
import HaditsBook from "./pages/HaditsBook";
import Home from "./pages/Home";
import News from "./pages/News";
import PrayerTime from "./pages/PrayerTime";
import Quran from "./pages/Quran";
import QuranAyat from "./pages/QuranAyat";
import SingleHadits from "./pages/SingleHadits";
import Surah from "./pages/Surah";
import About from "./pages/About"

const NotFoundPage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center min-h-[300px]">
      <div className="text-center">
        <h1 className="font-bold text-3xl">404 Not Found</h1>
        <p>
          Kembali ke{" "}
          <CustomLink
            href="/"
            className="underline decoration-primary decoration-2 font-semibold">
            Beranda
          </CustomLink>{" "}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="quran">
          <Route path=":surahNumber" element={<Surah />} />
          <Route path=":surahNumber/:ayahNumber" element={<QuranAyat />} />
          <Route index element={<Quran />} />
        </Route>
        <Route path="hadits">
          <Route path=":slug" element={<HaditsBook />} />
          <Route path=":slug/:number" element={<SingleHadits />} />
          <Route index element={<Hadits />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="schedule" element={<PrayerTime />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;