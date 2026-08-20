import Navbar from "./components/Navbar";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import HomePage from "./pages/Homepage";
import { Projects } from "./pages/Projects";
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
      <Projects />
      <div className="min-h-[calc(100svh-90px)] flex flex-col">
        <Blog />
      </div>
      <Contact />
    </>
  );
}
