import Image from "next/image";
import Clock from "./clock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Clock />
    </main>
  );
}
