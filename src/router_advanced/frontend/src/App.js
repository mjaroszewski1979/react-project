import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage, { loader as eventDetailLoader } from './pages/EventDetailPage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage'
import ErrorPage from './pages/Error';

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
          {index: true, element: <EventDetailPage></EventDetailPage>},
          {path: 'edit', element: <EditEventPage></EditEventPage>}
        ]},
        {path: 'new', element: <NewEventPage></NewEventPage>, action: newEventAction},
       ]},
    ]
  },
])

function App() {
  return <RouterProvider roter={router}></RouterProvider>;
}

export default App;
