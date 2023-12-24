import { FileRoutes } from "@solidjs/start";
import { Router } from "@solidjs/router";
import "./app.css";

export default function App() {
  return (
   <Router>
      <FileRoutes />
    </Router>
  );
}
