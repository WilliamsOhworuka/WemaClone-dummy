import { Status } from "@/types";

type TagProps = {
  status: Status;
};

export default function Tag({ status }: TagProps) {
  return (
    <span
      className={`inline-block py-1 px-2 text-xs rounded-lg ${
        status === Status.Pending
          ? "bg-[#FFF7EB] text-[#FFB648]"
          : "bg-[#EEF7F2] text-[#63B67E]"
      }`}
    >
      {status}
    </span>
  );
}
