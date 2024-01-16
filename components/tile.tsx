import { formatNumber } from "@/lib/functions";
import { Trend } from "@/types";
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type TileProps = {
  icon: ReactNode;
  color: string;
  count: number;
  title: string;
  trend: Trend;
  percent: number;
};

export default function Tile(props: TileProps) {
  const getTrendClass = (trend: Trend) => {
    switch (trend) {
      case Trend.Up:
        return "text-green-600";
      case Trend.Down:
        return "text-red-600";
      default:
        return "text-[#FFB648]";
    }
  };

  return (
    <div className="flex gap-3 bg-white w-full px-5 py-4 rounded-lg min-w-64">
      <div
        className="h-14 w-14 rounded-full flex justify-center items-center"
        style={{ background: props.color }}
      >
        {props.icon}
      </div>
      <div>
        <p className="font-medium text-[1.35rem]">
          {formatNumber(props.count)}
        </p>
        <p className="text-gray-500 text-[0.93rem] font-light mb-3">
          {props.title}
        </p>

        <p>
          <span className="mr-1">
            {props.trend === Trend.Up || props.trend === Trend.Flat ? (
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className={getTrendClass(props.trend)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faArrowTrendDown}
                className="text-red-600"
              />
            )}
          </span>
          <span className={`mr-2 ${getTrendClass(props.trend)}`}>
            {props.percent.toFixed(2)}%
          </span>
          <span className="text-gray-400 text-sm font-light">Last month</span>
        </p>
      </div>
    </div>
  );
}
