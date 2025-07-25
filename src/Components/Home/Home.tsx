import HomeOuter from "./HomeOuter/HomeOuter";
import Sale from "./SaleSection/SaleSection";
import UpcomingElectronics from "./UpcomingElectronics/UpcomingElectronics";
import HomeReview from "./HomeReview/HomeReview";

function Home() {
  return (
    <div>
      <HomeOuter />
      <Sale />
      <UpcomingElectronics />
      <HomeReview />
    </div>
  );
}
export default Home;
