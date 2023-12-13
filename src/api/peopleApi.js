

export const fetchPeople = async () => {
    try {
      const response = await fetch('/people');
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const responseData = await response.json();
  
      // Map the response data to the desired format
      const formattedData = responseData.map((person) => ({
        id: person.id,
        firstName: person.first_name,
        lastName: person.last_name,
        age: person.age,
        city: person.city,
        state: person.state,
      }));
  
      return formattedData;
    } catch (error) {
      console.error('Error fetching people data:', error);
      throw error; // Rethrow the error to handle it at the component level if needed
    }
  };