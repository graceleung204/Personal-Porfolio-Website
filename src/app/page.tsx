import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex justify-center px-6 pb-24">
        <ProfileCard />
      </div>
    </main>
  );
}
