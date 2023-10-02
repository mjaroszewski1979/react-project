import { Link } from "react-router-dom";

const EVENTS = [
    { id: 'e1', title: 'event1'},
    { id: 'e2', title: 'event2'},
    { id: 'e3', title: 'event3'}
]

function EventsPage() {
    return (
        <>
        <h1>Events Page</h1>
        <ul>
            {EVENTS.map((event) => (
                <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>
            ))}
        </ul>
        </>
    );
};

export default EventsPage;