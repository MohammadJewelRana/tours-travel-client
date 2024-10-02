import Newsletter from "@/components/shared/Newsletter";
import PopularTrips from "./_components/PopularTrips";
import Discount from "./_components/Discount";
import Container from "@/components/UI/Container";
import Popular from "../about/_components/Popular";

const page = () => {
  return (
    <div>
      <Container>
        {/* <PopularTrips /> */}
        <Discount />
      </Container>

      <Popular />

      <Newsletter />
    </div>
  );
};

export default page;
