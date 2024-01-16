"use client";

import { newUsersData } from "@/lib/data";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class NewUsersChart extends PureComponent {
  render() {
    return (
      <div className="bg-[#8B1076] rounded-lg py-6 pr-6 h-[344px]">
        <ResponsiveContainer width="100%" height="75%">
          <BarChart
            width={900}
            height={300}
            data={newUsersData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#A54094"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "white", fontSize: 11 }}
              tickLine={{ stroke: "white" }}
              stroke="#A54094"
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "white", fontSize: 11 }}
              tickLine={{ stroke: "#A54094" }}
            />
            <Bar
              dataKey="users"
              fill="white"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-white pl-8 mt-3">
          <p className="font-medium">New Users</p>
          <p className="text-sm">
            {`(+23%)`} <span className="font-light">than last week</span>
          </p>
        </div>
      </div>
    );
  }
}
