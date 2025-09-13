import React from "react";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
