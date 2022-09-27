export default function Main({ children }: any) {
  return (
    <main className="w-full min-h-screen h-full flex-grow flex flex-col pb-10">
      {children}
    </main>
  );
}
