import { Status, Trend } from "@/types";
import {
  faCheckDouble,
  faClockRotateLeft,
  faStore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const newUsersData = [
  {
    name: "Jan",
    users: 900,
  },
  {
    name: "Feb",
    users: 700,
  },
  {
    name: "Mar",
    users: 400,
  },
  {
    name: "Apr",
    users: 1100,
  },
  {
    name: "May",
    users: 700,
  },
];

export const userInflowData = [
  {
    name: "Jan",
    agents: 26,
    users: 15,
  },
  {
    name: "Feb",
    agents: 50,
    users: 22,
  },
  {
    name: "Mar",
    agents: 18,
    users: 16,
  },
  {
    name: "Apr",
    agents: 10,
    users: 23,
  },
  {
    name: "May",
    agents: 12,
    users: 20,
  },
  {
    name: "Jun",
    agents: 38,
    users: 26,
  },
  {
    name: "Jul",
    agents: 27,
    users: 24,
  },
  {
    name: "Aug",
    agents: 24,
    users: 65,
  },
];

export const recentRequestData = [
  {
    id: 1,
    name: "Micheal Olu",
    email: "micheal@mail.com",
    type: "New Agent",
    status: Status.Pending,
    date: "23/04/18",
  },
  {
    id: 2,
    name: "Chioma James",
    email: "chioma@mail.com",
    type: "Account Deactivation",
    status: Status.Pending,
    date: "23/12/20",
  },
  {
    id: 3,
    name: "Boluwatife Ade",
    email: "laure@mail.com",
    type: "New User",
    status: Status.Active,
    date: "13/04/09",
  },
  {
    id: 4,
    name: "Miriam Eric",
    email: "miriam@mail.com",
    type: "Email Auth",
    status: Status.Active,
    date: "03/04/21",
  },
];

export const analytics = [
  {
    icon: <FontAwesomeIcon icon={faClockRotateLeft} color="#2F49D1" />,
    color: "#E9EDFA",
    count: 147456,
    title: "Pending Requests",
    trend: Trend.Up,
    percent: 4,
  },
  {
    icon: <FontAwesomeIcon icon={faCheckDouble} color="#FFB648" />,
    color: "#FFF8ED",
    count: 478520,
    title: "Approved Requests",
    trend: Trend.Up,
    percent: 0.24,
  },
  {
    icon: <FontAwesomeIcon icon={faStore} color="#9472F1" />,
    color: "#EFEAFD",
    count: 154872,
    title: "Total Agents",
    trend: Trend.Down,
    percent: 1.64,
  },
  {
    icon: <FontAwesomeIcon icon={faUsers} color="#4CDE97" />,
    color: "#EDFCF5",
    count: 167,
    title: "Total Users",
    trend: Trend.Flat,
    percent: 0.0,
  },
];
