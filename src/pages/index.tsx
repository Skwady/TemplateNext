import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LandingPageContainer } from "@/ui/modules/landingPage/landingPage.container";

export default function Home() {
  return (
    <>
      <Seo title="Home" description="This is the home page" />
      <Layout>
        <LandingPageContainer />
      </Layout>
      
    </>
  );
}