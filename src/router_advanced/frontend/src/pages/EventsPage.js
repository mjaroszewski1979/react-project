import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();


  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
    {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>}
  </Await>;
    </Suspense>
  )
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({message: 'Could not fetch the data...'}, {status: 500})
    
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export function loader() {
  return defer({
    events: loadEvents()
  })

};