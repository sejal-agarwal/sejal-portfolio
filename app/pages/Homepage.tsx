import { AboutCard } from "../components/homepage-components/AboutCard";
import { ConnectCard } from "../components/homepage-components/ConnectCard";
import { FeaturedCard } from "../components/homepage-components/FeaturedCard";
import { HeroCard } from "../components/homepage-components/HeroCard";
import { IllustrationCard } from "../components/homepage-components/IllustrationCard";
import { QuickLinksCard } from "../components/homepage-components/QuickLinksCard";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col py-2 px-6">
      <main className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-5 w-full">

          <div className="md:col-span-7 w-full">
            <HeroCard />
          </div>
          <div className="md:col-span-5 w-full">
            <IllustrationCard />
          </div>

          <div className="md:col-span-6 w-full">
            <AboutCard />
          </div>
          <div className="md:col-span-6 w-full">
            <ConnectCard />
          </div>

        </div>

        <div className="lg:col-span-4 flex flex-col gap-5 w-full">
          <FeaturedCard />
          <QuickLinksCard />
        </div>

      </main>
    </div>
  );
}