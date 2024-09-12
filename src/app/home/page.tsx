import { HomeContent, SideBar } from "../components/blocks/home"

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <HomeContent />
      </div>
    </div>
  );
}
