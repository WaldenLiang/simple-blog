import { times } from "lodash-es";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      {times(3, (index) => (
        <div key={index} className="flex flex-col gap-4 w-full">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
}
