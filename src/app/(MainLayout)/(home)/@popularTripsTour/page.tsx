import SectionTitle from "@/components/shared/SectionTitle";
import SingleCard from "@/components/UI/Card";
import Container from "@/components/UI/Container";
 


const page = async () => {
  const tourData = [
    {
      id: 1,
      image: "/assets/locations/place1.jpg", // Path to the image
      tourPlace: "Eiffel Tower",
      location: "Paris, France",
      ratings: 5,
      timePeriod: "5 Days / 4 Nights",
      daysAndNights: {
        days: 5,
        nights: 4
      },
      price: 1200,
      details: "Experience the iconic Eiffel Tower, beautiful Parisian culture, and exquisite French cuisine in a 5-day adventure."
    },
    {
      id: 2,
      image: "/assets/locations/place2.jpg", // Path to the image
      tourPlace: "Great Wall of China",
      location: "Beijing, China",
      ratings: 4,
      timePeriod: "7 Days / 6 Nights",
      daysAndNights: {
        days: 7,
        nights: 6
      },
      price: 1500,
      details: "Explore the magnificent Great Wall and delve into the rich history of ancient China with guided tours and breathtaking scenery."
    },
    {
      id: 3,
      image: "/assets/locations/place3.jpg", // Path to the image
      tourPlace: "Grand Canyon",
      location: "Arizona, USA",
      ratings: 4.5,
      timePeriod: "3 Days / 2 Nights",
      daysAndNights: {
        days: 3,
        nights: 2
      },
      price: 800,
      details: "Discover the stunning landscapes of the Grand Canyon with hiking, sightseeing, and expert guides in a short yet fulfilling tour."
    },
    {
      id: 4,
      image: "/assets/locations/place4.jpg", // Path to the image
      tourPlace: "Santorini",
      location: "Santorini, Greece",
      ratings: 5,
      timePeriod: "6 Days / 5 Nights",
      daysAndNights: {
        days: 6,
        nights: 5
      },
      price: 1800,
      details: "Relax in the beautiful white-washed towns of Santorini, overlooking the Aegean Sea, with luxury accommodations and private tours."
    },
    {
      id: 5,
      image: "/assets/locations/place5.jpg", // Path to the image
      tourPlace: "Machu Picchu",
      location: "Cusco, Peru",
      ratings: 4.5,
      timePeriod: "4 Days / 3 Nights",
      daysAndNights: {
        days: 4,
        nights: 3
      },
      price: 1400,
      details: "Embark on a journey to the ancient Incan city of Machu Picchu, set amidst the Andes mountains, with cultural and historical insights."
    },
    {
      id: 6,
      image: "/assets/locations/place6.jpg", // Path to the image
      tourPlace: "Mount Fuji",
      location: "Honshu, Japan",
      ratings: 4.7,
      timePeriod: "5 Days / 4 Nights",
      daysAndNights: {
        days: 5,
        nights: 4
      },
      price: 1300,
      details: "Climb the iconic Mount Fuji and explore the surrounding lakes and temples, with a perfect mix of adventure and relaxation."
    },
    {
      id: 7,
      image: "/assets/locations/place7.jpg", // Path to the image
      tourPlace: "Colosseum",
      location: "Rome, Italy",
      ratings: 4.8,
      timePeriod: "4 Days / 3 Nights",
      daysAndNights: {
        days: 4,
        nights: 3
      },
      price: 1100,
      details: "Step back in time to ancient Rome, touring the Colosseum and other historical sites, while enjoying Italian cuisine and culture."
    },
    {
      id: 8,
      image: "/assets/locations/place8.jpg", // Path to the image
      tourPlace: "Sydney Opera House",
      location: "Sydney, Australia",
      ratings: 4.6,
      timePeriod: "6 Days / 5 Nights",
      daysAndNights: {
        days: 6,
        nights: 5
      },
      price: 1700,
      details: "Visit the iconic Sydney Opera House and explore the vibrant city, from its beaches to world-class dining and cultural landmarks."
    },
    {
      id: 9,
      image: "/assets/locations/place9.jpg", // Path to the image
      tourPlace: "Victoria Falls",
      location: "Livingstone, Zambia",
      ratings: 4.9,
      timePeriod: "5 Days / 4 Nights",
      daysAndNights: {
        days: 5,
        nights: 4
      },
      price: 1600,
      details: "Witness the majestic Victoria Falls, one of the natural wonders of the world, with guided tours and thrilling adventure activities."
    }
  ];

   


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
