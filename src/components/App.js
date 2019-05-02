import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

function App() {
  return (
    <div>
      <p>This is an example of error boundaries in React 16.</p>
      <hr />
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}
export default App;
