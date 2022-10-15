import { MainProps } from "./types";
export default function Main({ children }: MainProps) {
  return (
    <main className="w-full min-h-screen h-full flex-grow flex flex-col pb-10">
      {children}
    </main>
  );
}
