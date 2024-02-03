import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <p className="text-green-700 text-2xl font-bold text-center pt-6">
          Welcome to the CRUD Project
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center px-5 py-[300px] ">
        <div className="border border-white p-2  rounded-full ">
          <Link href="/books">
            <Button className="text-green-700">Books</Button>
          </Link>
        </div>
        <div className="border border-white p-2 rounded-full ">
          <Link href="/products">
            <Button className="text-green-700">products</Button>
          </Link>
        </div>
        <div className="border border-white p-2 rounded-full">
          <Link href="/users">
            <Button className="text-green-700">users</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
