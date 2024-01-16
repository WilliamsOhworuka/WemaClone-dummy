"use client";

import { userInflowData } from "@/lib/data";
import { formatNumber } from "@/lib/functions";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class UserInflow extends PureComponent {
  render() {
    return (
      <div>
        <div className="flex justify-between mb-4 px-4">
          <div>
            <p className="font-semibold max-w-24 sm:max-w-auto">
              User Inflow Statistics
            </p>
            <p className="text-gray-400 text-xs">Nov - July</p>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="flex items-center gap-1">
                <span className="p-1 inline-block rounded-full bg-[#5F2EEA]" />
                <span className="text-gray-400 text-[0.65rem] font-medium">
                  AGENTS
                </span>
              </p>
              <p className="ml-3">{formatNumber(474273)}</p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <span className="p-1 inline-block rounded-full bg-[#4CDE97]" />
                <span className="text-gray-400 text-[0.65rem] font-medium">
                  USERS
                </span>
              </p>
              <p className="ml-3">{formatNumber(782396)}</p>
            </div>
          </div>
        </div>

        <div className="pr-4">
          <ResponsiveContainer width="100%" className="!h-[220px]">
            <LineChart width={500} height={300} data={userInflowData}>
              <CartesianGrid horizontal={false} />
              <XAxis dataKey="name" axisLine={false} />
              <YAxis strokeDasharray="3 3" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="agents"
                stroke="#5F2EEA"
                dot={false}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#4CDE97"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
