import EventsList from '../components/EventsList';

function EventsPage() {

  return (
    <>
      <EventsList/>
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        throw { message: 'Could not fetch the data...' };
        
      } else {
        
        return response;
      }
};