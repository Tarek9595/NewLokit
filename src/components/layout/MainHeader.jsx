import Logo from "../common/Logo";
import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";
export default function MainHeader() {
  return (
    <header className="w-full bg-white sticky top-0 z-5000 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-12 md:py-6">
        <Logo />
        <LargeNav />
        <SmallNav />
      </div>
    </header>
  );
}
