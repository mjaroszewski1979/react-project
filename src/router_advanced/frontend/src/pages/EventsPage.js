import { json } from 'react-router-dom';
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
        return json({message: 'Could not fetch the data...'}, {status: 500})
        
      } else {
        
        return response;
      }
};