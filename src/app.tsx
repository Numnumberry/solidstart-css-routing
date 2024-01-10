// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { RouteDefinition, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense, lazy } from "solid-js";
import "./app.css";

export const configRoutes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./routes/index'))
  },
  {
    path: '/about',
    component: lazy(() => import('./routes/about'))
  },
  {
    path: '/*all',
    component: lazy(() => import('./routes/[...404]'))
  }
]

export default function App() {
  const fileRoutes = FileRoutes()

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      {fileRoutes}
      {/* {configRoutes} */}
    </Router>
  );
}
