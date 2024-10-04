import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
   <main>
    <h1>Hello World!</h1>
    {/* <a href="/users">Users</a>   we don't use a tag for routing we simply use Link for better optimization*/} 
    <Link href="/users">Users</Link>
    <ProductCard />
    </main>
  );
}
