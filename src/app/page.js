import FooterPage from "@/components/homepage/Footer";
import FriendsPage from "@/components/homepage/Friends";
import HeroPage from "@/components/homepage/Hero";

export default function Home() {
  return (
    <div>
      <HeroPage></HeroPage>
      <FriendsPage></FriendsPage>
      <FooterPage></FooterPage>
    </div>
  );
}
