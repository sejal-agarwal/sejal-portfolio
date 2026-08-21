import Navbar from "./components/Navbar";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";
import HomepageSection from "./sections/Homepage";
import { Projects } from "./sections/Projects";
import { Research } from "./sections/Research";
import { Work } from "./sections/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100svh-90px)] lg:h-[calc(100svh-90px)] flex flex-col">
        <HomepageSection />
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
