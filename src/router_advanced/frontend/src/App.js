import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage'
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {index: true, element: <HomePage></HomePage>},
      {path: 'events', 
       element: <EventsRootLayout></EventsRootLayout>,
       children: [
        {index: true, element: <EventsPage></EventsPage>, loader: eventsLoader},
        {path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
          {index: true, element: <EventDetailPage></EventDetailPage>, action: deleteEventAction},
          {path: 'edit', element: <EditEventPage></EditEventPage>, action: manipulateEventAction}
        ]},
        {path: 'new', element: <NewEventPage></NewEventPage>, action: manipulateEventAction},
       ]},
    ]
  },
])

function App() {
  return <RouterProvider roter={router}></RouterProvider>;
}

export default App;
