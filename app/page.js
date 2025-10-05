import Link from "next/link";
import Navigation from "@/app/components/Navigation";

export default function Home() {
  return (
      <div>
          <Navigation />
    <h1>
     The Wild Oasis. Welcome to paradise.
    </h1>
          <Link href="/cabins">Explore luxury cabins</Link>
      </div>
  );
}
