import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/eventsNavigation.tsx.tsx", [
    route("events", "routes/events.tsx", [
      route("new", ""),
      route(":id", ""),
      route(":id/edit", ""),
    ]),
    route("events", "routes/events.tsx"),
    route("events", "routes/events.tsx"),
  ]),
] satisfies RouteConfig;
