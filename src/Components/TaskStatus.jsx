import React from "react";
import { RiTodoLine } from "react-icons/ri";

const TaskStatus = ({
  inProgressTickets,
  resolvedTickets = [],
  onComplete,
}) => {
  return (
    <>
      <div className="bg-white rounded-2xl p-5 h-fit shadow-sm top-20">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-black">Task Status</h2>
        </div>

        {inProgressTickets.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black/10">
              <RiTodoLine className="text-black/70 text-xl" />
            </div>
            <p className="text-sm font-medium text-black/40">
              No tasks in progress
            </p>
            <p className="text-xs text-black/40">
              Click on a ticket to start working on it.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {inProgressTickets.map((ticket) => (
              <li key={ticket.id} className="items-start gap-3 rounded-xl p-3">
                <div className="min-w-0">
                  <p className="text-xl pb-2 font-semibold text-black">
                    {ticket.title}
                  </p>
                </div>
                <button
                  onClick={() => onComplete(ticket)}
                  className="bg-green-600 w-full btn border-0"
                >
                  Complete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {resolvedTickets.length > 0 && (
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-black">Resolved Task</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {resolvedTickets.map((ticket) => (
                <li
                  key={ticket.id}
                  className="flex items-start gap-3 rounded-sm p-3 bg-sky-200"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-black">
                      {ticket.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskStatus;
