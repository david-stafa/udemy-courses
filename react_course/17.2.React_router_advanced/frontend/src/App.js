// Challenge / Exercise
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import EditEvent from "./pages/EditEvent";
import NewEvent from "./pages/NewEvent";
import Navigation from "./pages/Navigation";
import { Outlet } from "react-router";
import EventsNavigation from "./components/EventsNavigation";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LAYOUT for NAVIGATION */}
        <Route element={<Navigation />}>
          <Route path="/" element={<Homepage />} />
          {/* EVENTS ROUTES */}
          <Route path="events" element={<EventsNavigation />}>
            <Route index element={<Events />} />
            <Route path="new" element={<NewEvent />} />
            <Route path=":id" element={<EventDetail />} />
            <Route path=":id/edit" element={<EditEvent />} />
          </Route>
          {/* ---------- */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
