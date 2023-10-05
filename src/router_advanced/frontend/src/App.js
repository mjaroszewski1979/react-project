import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
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
        {path: ':eventId', element: <EventDetailPage></EventDetailPage>},
        {path: 'new', element: <NewEventPage></NewEventPage>},
        {path: ':eventId/edit', element: <EditEventPage></EditEventPage>}

       ]},
    ]
  },
])

function App() {
  return <RouterProvider roter={router}></RouterProvider>;
}

export default App;
