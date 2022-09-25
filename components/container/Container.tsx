import { ContainerProps } from "./types";
export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col max-w-7xl w-full justify-between items-center mx-auto mt-2">
      {children}
    </div>
  );
}
