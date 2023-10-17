import { json, useRouteLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventItem from '../components/EventItem';
import EventsList from "../components/EventsList";

function EventDetailPage() {
    const { event, events } = useRouteLoaderData('event-detail');
    return ( 
        <>
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={event}>
                {loadedEvent => <EventItem event={loadedEvent}></EventItem>}
            </Await>
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents}></EventsList>}
            </Await>
        </Suspense>
        </>
    );
};

export default EventDetailPage;

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch event details!'}, {status: 500})
    }

    else {
        const resData = await response.json();
        return resData.event;
    }

}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
      return json({message: 'Could not fetch the data...'}, {status: 500})
      
    } else {
      const resData = await response.json();
      return resData.events;
    }
  };

export async function loader({request, params}) {
    const id = params.eventId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    })

    
}

export async function action(request, params) {
    const id = params.eventId;

    const response = await fetch('http://localhost:8080/events' + id, {
        method: request.method
    });

    if (!response.ok) {
        throw json({message: 'Could not delete event!'}, {status: 500})
    }

    else {
        return redirect('/events');
    }

}