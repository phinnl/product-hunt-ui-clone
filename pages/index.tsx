import { MainContent, SideBar } from "@/components";
import { MainLayout } from "@/layout";
import { NextPageWithLayout } from "@/models";

const Home: NextPageWithLayout = () => {
  return (
    <div className="container my-10 flex flex-1">
      <MainContent />
      <SideBar />
    </div>
  );
};

Home.getLayout = MainLayout

export default Home;
