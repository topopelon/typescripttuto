import React from "react";

type RouteType = {
  path: string;
  exact?: boolean;
  layout: React.ElementType;
  component: React.ElementType;
};

export default RouteType;
