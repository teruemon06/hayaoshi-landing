import HeroV2 from '@/components/hero-v2';
import Prefectures from '@/components/prefectures';
import GameModes from '@/components/game-modes';
import Subjects from '@/components/subjects';
import Engagement from '@/components/engagement';
import AnytimeAnywhere from '@/components/anytime-anywhere';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroV2 />
      <Prefectures />
      <GameModes />
      <Subjects />
      <Engagement />
      <AnytimeAnywhere />
      <FinalCTA />
      <Footer />
    </main>
  );
}
