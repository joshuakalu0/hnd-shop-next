import { SingleProduct } from "@/components/product/singleProduct";
import { DB } from "@/db";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start pl-10 pt-5">
      <div className="mb-9">
        <h3 className="capitalize font-bold text-4xl">Casual</h3>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-5">
        {DB.map((data) => (
          <SingleProduct key={data.id} data={data} />
        ))}
      </div>
    </main>
  );
}
