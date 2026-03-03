import React from "react";
const priorityStyles = {
  High: { color: "#dc2626" },
  Medium: { color: "#d97706" },
  Low: { color: "#16a34a" },
};

const TicketCard = ({ ticket,onAddToProgress, isAlreadyAdded }) => {
  const formattedDate = new Date(ticket.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

  const priority = ticket.priority || "Low";
  const priorityStyle = priorityStyles[priority];

  return (
    <div onClick={() => onAddToProgress(ticket)} disabled={isAlreadyAdded}
      className="w-full bg-[#f9fafb] border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {ticket.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            {ticket.description}
          </p>
        </div>

      
        {ticket.status === "open" ? (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-700 self-start shrink-0">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Open
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-700 self-start shrink-0">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            In Progress
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-5 text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="text-gray-400">#{ticket.id}</span>

          <span
            className="font-semibold uppercase tracking-wide"
            style={{ color: priorityStyle.color }}
          >
            {priority} Priority
          </span>

          <span className="text-gray-600 font-medium">
            {ticket.customer}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;