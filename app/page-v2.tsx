import HeroV2 from '@/components/hero-v2';
import Prefectures from '@/components/prefectures';
import QuickAnswer from '@/components/quick-answer';
import GameModes from '@/components/game-modes';
import Subjects from '@/components/subjects';
import Engagement from '@/components/engagement';
import Users from '@/components/users';
import Roadmap from '@/components/roadmap';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroV2 />
      <Prefectures />
      <QuickAnswer />
      <GameModes />
      <Subjects />
      <Engagement />
      <Users />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </main>
  );
}
