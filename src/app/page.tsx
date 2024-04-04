import Adder from "@/components/Adder";
import Header from "@/components/Header";
import prisma from "@/helper/db";

export default async function Home() {
  const notes = await prisma.note.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div>
      <Header />
      <Adder notes={notes} />
    </div>
  );
}
