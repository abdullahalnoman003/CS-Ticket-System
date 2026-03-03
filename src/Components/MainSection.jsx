import React from "react";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";
import { MdDoneOutline } from "react-icons/md";

const MainSection = ({
  tickets,
  inProgressTickets,
  resolvedTickets,
  onAddToProgress,
  onComplete,
}) => {
  const inProgressIds = new Set(inProgressTickets.map((t) => t.id));

  return (
    <section id="tickets" className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Customer Tickets
          </h2>
        </div>

        {/*Ticket grid and task status at right */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tickets */}
          <div className="flex-1">
            {tickets.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <MdDoneOutline className="text-green-800 text-4xl" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-700">
                    All tickets resolved!
                  </p>
                  <p className="text-sm text-gray-400">
                    Great work — no open tickets remain.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onAddToProgress={onAddToProgress}
                    isAlreadyAdded={inProgressIds.has(ticket.id)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="w-full lg:w-80 xl:w-96">
            <TaskStatus
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              onComplete={onComplete}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
