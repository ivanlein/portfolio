import Header from "@/components/Header";
import { Repo } from "@/types/repo";
import Link from "next/link";

async function getData(): Promise<Repo[]> {
  const res = await fetch("http://localhost:3000/api/repos");
  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getData();

  return (
    <>
      <Header />
      <div className="container">
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
        <section className="container center-container">
          <Link
            href="https://github.com/ivanlein?tab=repositories"
            className="cta-button"
          >
            View more
          </Link>
        </section>
      </div>
    </>
  );
}
