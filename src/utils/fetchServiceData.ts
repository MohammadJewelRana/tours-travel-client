 

export const fetchTourData = async () => {
    try {
      const response = await fetch('/service.json'); // Path to the JSON file

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      


      return data;

    } catch (error) {

      console.error("Error in fetchTourData:", error);

      return null;
    }
  };
  