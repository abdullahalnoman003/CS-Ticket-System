import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import MainSection from "./Components/MainSection";
import Footer from "./Components/Footer";
import initialTickets from "./data/tickets";

const App = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Add a ticket to the Task Status
  const handleAddToProgress = (ticket) => {
    const alreadyAdded = inProgressTickets.some((t) => t.id === ticket.id);
    if (alreadyAdded) {
      toast.info(`"${ticket.title}" is already in progress.`);
      return;
    }
    setInProgressTickets((prev) => [...prev, ticket]);
    toast.success(`Ticket added to In Progress: "${ticket.title}"`);
  };

  // Complete a ticket
  const handleComplete = (ticket) => {
    setInProgressTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, { ...ticket, status: "resolved" }]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success(`Ticket resolved: "${ticket.title}"`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <Banner
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />

      <MainSection
        tickets={tickets}
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
        onAddToProgress={handleAddToProgress}
        onComplete={handleComplete}
      />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;