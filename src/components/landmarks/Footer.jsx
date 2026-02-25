import dayjs from "dayjs";

export function Footer() {
  return (
    <p className="center">
      <p>{dayjs().format("[Today is] dddd")} :3</p>
    </p>
  );
}
