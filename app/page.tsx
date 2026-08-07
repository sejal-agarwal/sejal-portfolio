import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import { Research } from "./pages/Research";
import { Work } from "./pages/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100svh-90px)] lg:h-[calc(100svh-90px)] flex flex-col">
        <HomePage />
      </div>
      <Work />
      <Research />
    </>
  );
}
