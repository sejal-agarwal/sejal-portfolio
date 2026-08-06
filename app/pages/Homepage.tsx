import { AboutCard } from "../components/homepage-components/AboutCard";
import { ConnectCard } from "../components/homepage-components/ConnectCard";
import { FeaturedCard } from "../components/homepage-components/FeaturedCard";
import { HeroCard } from "../components/homepage-components/HeroCard";
import { IllustrationCard } from "../components/homepage-components/IllustrationCard";
import { QuickLinksCard } from "../components/homepage-components/QuickLinksCard";

export default function HomePage() {
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col py-2 px-6">
      <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 lg:flex-1 lg:min-h-0">

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 lg:grid-rows-[minmax(0,1.35fr)_minmax(0,1fr)] gap-5 w-full min-h-0">
          <div className="md:col-span-7 w-full h-full flex flex-col">
            <HeroCard />
          </div>
          <div className="md:col-span-5 w-full h-full flex flex-col">
            <IllustrationCard />
          </div>

          <div className="md:col-span-6 w-full">
            <AboutCard />
          </div>
          <div className="md:col-span-6 w-full">
            <ConnectCard />
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-rows-[minmax(0,1fr)_auto] gap-5 w-full min-h-0">
          <FeaturedCard />
          <QuickLinksCard />
        </div>

      </main>
    </div>
  );
}
