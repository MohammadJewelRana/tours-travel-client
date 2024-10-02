import { ReactNode } from "react";
import Caresoul from "./_components/Caresoul";

 

const layout = ({
  children,
  popularTripsTour,
}: {
  children: React.ReactNode;
  popularTripsTour: ReactNode;
}) => {
  return (
    <>
    <Caresoul/>
      {popularTripsTour}
      {children}
  
    </>
  );
};

export default layout;
