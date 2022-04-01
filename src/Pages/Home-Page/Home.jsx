import { Nav } from "../../components/Nav/Nav";
// import { Footer } from "../../components/Footer/Footer";
// import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { NavForTab } from "../../components/NavForTab/NavForTab";
import "./home.css";
import "./homeResponsive.css";

export function Home() {
  return (
    <>
      <div className="home-page">
        <Nav value={true} />
        <Header value={true} />
        <main className="home__main">
          {/* <Card /> */}
          <NavForTab />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
