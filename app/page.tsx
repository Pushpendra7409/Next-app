import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
   <main>
    <h1>Hello { session && <span>{session.user!.name}</span> }</h1>
    {/* <a href="/users">Users</a>   we don't use a tag for routing we simply use Link for better optimization*/} 
    <Link href="/users">Users</Link>
    <ProductCard />
    </main>
  );
}
