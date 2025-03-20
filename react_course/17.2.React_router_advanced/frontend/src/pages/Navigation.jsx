import { NavLink, Outlet } from "react-router";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            {/* the END prop ensures that active class is added only when the link is event not events/.... */}
            <NavLink end to="events">Events</NavLink> 
            <NavLink to="events/new">New Event</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
