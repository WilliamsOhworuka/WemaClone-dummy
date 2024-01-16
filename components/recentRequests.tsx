import { Status } from "@/types";
import Tag from "./tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { recentRequestData } from "@/lib/data";

export default function RecentRequests() {
  const tableHeaders = ["Name/Email", "Type", "Status"];

  return (
    <div>
      <p className="font-semibold mb-2 p-4">Recent Requests</p>
      <table className="w-full">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th
                className="text-start px-4 py-2 text-gray-500 border-b border-gray-100 font-medium text-sm"
                key={header}
              >
                {header}
              </th>
            ))}
            <th className="text-start px-4 py-2 text-gray-500 border-b border-gray-100 font-medium text-sm hidden sm:table-cell">
              Date
            </th>
            <th className="border-b border-gray-100" />
          </tr>
        </thead>
        <tbody>
          {recentRequestData.map((request) => (
            <tr key={request.id} className="hover:bg-gray-50 cursor-pointer">
              <td className="px-4 py-4 border-b border-gray-100">
                <div className="flex gap-4 items-center">
                  <div className="h-10 px-5 rounded-md bg-gray-300 hidden sm:blcok" />
                  <div>
                    <p>{request.name}</p>
                    <p className="text-gray-400 text-sm">{request.email}</p>
                  </div>
                </div>
              </td>
              <td className="text-gray-400 text-[0.88rem] px-4 py-4 border-b border-gray-100">
                {request.type}
              </td>
              <td className="px-4 py-4 border-b border-gray-100">
                <Tag status={request.status} />
                <p className="text-xs text-gray-400 mt-1 sm:hidden">
                  {request.date}
                </p>
              </td>
              <td className="text-gray-400 text-[0.88rem] px-4 py-4 border-b border-gray-100 hidden sm:table-cell">
                {request.date}
              </td>
              <td className="px-4 py-4 border-b border-gray-100 hidden sm:table-cell">
                <span className="h-6 w-6 rounded-full bg-[#EDF5FD] flex justify-center items-center">
                  <FontAwesomeIcon icon={faChevronRight} color="#CC86C0" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
