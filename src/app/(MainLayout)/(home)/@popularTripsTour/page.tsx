"use client"

import SectionTitle from "@/components/shared/SectionTitle";
import SingleCard from "@/components/UI/Card";
import Container from "@/components/UI/Container";
import { tourData } from "@/db";
 
 


const page = async () => {

  
  // const [tourData, setTourData] = useState([]);

  // useEffect(() => {
  //   const getTourData = async () => {
  //     const data = await fetchTourData(); // Fetch data using the utility function
  //     if (data) {
  //       setTourData(data);
  //     }
  //   };

  //   getTourData();
  // }, []);

  // console.log(tourData);
  
 
  

   


  return (
    <div>
      <Container>
        <SectionTitle
          heading="Find Popular Trips"
          subHeading=" Whether you’re looking for places for a vacation. We are here to"
          buttonText="View More"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8  my-12 place-items-center">
          {tourData
            ?.slice(0, 8)
            .map((item) => <SingleCard key={item?.id} item={item} />)}
        </div>
      </Container>
    </div>
  );
};

export default page;
