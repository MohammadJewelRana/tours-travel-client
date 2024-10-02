 

const layout = ({
  children,
  popularTripsTour,
}: {
  children: React.ReactNode;
  popularTripsTour: ReactNode;
}) => {
  return (
    <>
      {popularTripsTour}
      {children}
  
    </>
  );
};

export default layout;
