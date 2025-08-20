import React, { useState, useEffect } from "react";

function AppLoader({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for hash to stabilize on login redirect
    requestAnimationFrame(() => setReady(true));
  }, []);

  return ready ? children : null;
}

export default AppLoader;
