import { useActiveInfo } from "../../store";
import TopSection from "../../components/common/TopSection";
import SideLinks from "./SideLinks";
import SideInfo from "./SideInfo";

export default function Wishlist() {
  const { activeInfo } = useActiveInfo();
  const sectionName = activeInfo?.name || "Wishlist";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow flex flex-col items-center">
        <TopSection name={sectionName} />
        <div className="container mx-auto px-4 py-10 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center font-inter w-full">
          <SideLinks />
          <SideInfo />
        </div>
      </main>
    </div>
  );
}
