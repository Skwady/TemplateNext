import { Navbar } from "@/ui/components/navbar/navbar";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" description="This is the home page" />
      <Navbar />
      <h1 className="text-8xl flex justify-center pt-10">Accueil</h1>
    </>
  );
}