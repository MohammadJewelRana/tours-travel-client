import { FaShieldAlt, FaSuitcase, FaHeadset } from "react-icons/fa"; // Importing the icons from FontAwesome

const Feature = () => {
  const featureData = [
    {
      icon: <FaShieldAlt />, // Font Awesome icon for safety
      heading: "Travel Safety",
      text: "Your safety is our priority. We ensure secure travel experiences.",
    },
    {
      icon: <FaSuitcase />, // Font Awesome icon for package
      heading: "Amazing Package",
      text: "Discover our exclusive packages, tailored to fit your travel needs.",
    },
    {
      icon: <FaHeadset />, // Font Awesome icon for 24x7 service
      heading: "24x7 Service",
      text: "Our customer service is available around the clock for your support.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {featureData.map((item, index) => (
        <div key={index} className="flex items-center justify-center gap-8 p-8 border">
          <div className="text-3xl text-purple-500"> {/* Icon styling */}
            {item.icon}
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{item.heading}</h1>
            <p className="text-gray-500 max-w-40">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
