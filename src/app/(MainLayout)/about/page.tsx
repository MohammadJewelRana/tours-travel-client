import SectionBanner from "@/components/shared/SectionBanner";
import Popular from "./_components/Popular";
import WhyChoose from "./_components/WhyChoose";
import Container from "@/components/UI/Container";
import Team from "./_components/Team";
import Newsletter from "@/components/shared/Newsletter";

const page = () => {
  return (
    <div>
      <SectionBanner heading={"About us"} />

      <Container>
        <WhyChoose />
        <Team />
        <Popular />
      </Container>
      <Newsletter></Newsletter>
    </div>
  );
};

export default page;
