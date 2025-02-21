import Link from "next/link";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { Repo } from "@/types/repo";

async function getData(): Promise<Repo[]> {
  const res = await fetch("http://localhost:3000/api/repos");
  return res.json();
}

export default async function Home() {
  const repos = await getData();

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <About />
        <h1 className="main-text">My projects</h1>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <Link href={repo.html_url}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
