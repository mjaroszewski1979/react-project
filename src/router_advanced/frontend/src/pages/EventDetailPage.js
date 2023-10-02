import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();
    return (
        <>
        <h2>Event Details</h2>
        <p>{params.eventId}</p>
        </>
    )
};

export default EventDetailPage;