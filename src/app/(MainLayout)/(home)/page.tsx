import Newsletter from "@/components/shared/Newsletter";
 
import Discount from "./_components/Discount";
import Container from "@/components/UI/Container";
import Popular from "../about/_components/Popular";
import Caresoul from "./_components/Caresoul";
import Banner2 from "./_components/Banner2";
import Feature from "./_components/Feature";

const page = () => {
  return (
    <div>
      {/* <Caresoul/> */}
       <Container>
       <Feature/>

        {/* <PopularTrips /> */}
        <Popular />
        <Discount />
      </Container>
      <Banner2/>
       
  

      <Newsletter />
    </div>
  );
};

export default page;
