import Header from "@/components/Header";
import { Repo } from "@/types/repo";
import Link from "next/link";

async function getData(): Promise<Repo[]> {
  try {
    const res = await fetch("http://192.168.1.82:3000/api/repos");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
    // Возвращаем заглушку, если не удалось получить данные с API
    return [
      {
        id: 1,
        name: "Store-type-app",
        description:
          "Fake store app. Stack: TS, React, React router dom, Axios, Tailwind, API",
        html_url: "https://github.com/ivanlein/Store-type-app",
        updated_at: new Date().toISOString(),
      },
      {
        id: 2,
        name: "seminar-json-server",
        description: "Stack: JSX, CSS, JS, React, json-server, fetch",
        html_url: "https://github.com/ivanlein/seminar-json-server",
        updated_at: new Date().toISOString(),
      },
      {
        id: 3,
        name: "whatsapp-chat",
        description:
          "WhatsApp Chat stack: HTML, CSS, JS, React.js, Axios, Webpack",
        html_url: "https://github.com/ivanlein/whatsapp-chat",
        updated_at: new Date().toISOString(),
      },
      {
        id: 4,
        name: "RocketPizza-V2",
        description:
          "Stack: JS, React, mockAPI, react-router, SASS, react-redux, Reduxjs/toolkit, axios, qs, lodash.debounce, React-pagination, React-content-loader => V2: TS, webpack, +ahooks, +clsx, +react-loadable, +react-loader-spinner, +react-paginate, +semantic-ui",
        html_url: "https://github.com/ivanlein/RocketPizza-V2",
        updated_at: new Date().toISOString(),
      },
      {
        id: 5,
        name: "TextBlog__app",
        description:
          "A text blog in which you can create posts or read existing ones (100 quotes in Latin). Stack: JS, React, my own mini UI library, JSONPlaceholder API, Axios, React router",
        html_url: "https://github.com/ivanlein/TextBlog__app",
        updated_at: new Date().toISOString(),
      },
      {
        id: 6,
        name: "2D_shooter-vs-zombies",
        description: "2D game with JS",
        html_url: "https://github.com/ivanlein/2D_shooter-vs-zombies",
        updated_at: new Date().toISOString(),
      },
      {
        id: 7,
        name: "2048_game",
        description:
          "2048 is the game where you have to move your plates, to reach 2048 score.",
        html_url: "https://github.com/ivanlein/2048_game",
        updated_at: new Date().toISOString(),
      },
      {
        id: 8,
        name: "analytics",
        description: "analytics type website",
        html_url: "https://github.com/ivanlein/analytics",
        updated_at: new Date().toISOString(),
      },
      {
        id: 9,
        name: "jim",
        description: "jim website",
        html_url: "https://github.com/ivanlein/jim",
        updated_at: new Date().toISOString(),
      },
      {
        id: 10,
        name: "pozitivus_project-website",
        description: "pozitivus_project-website",
        html_url: "https://github.com/ivanlein/pozitivus_project-website",
        updated_at: new Date().toISOString(),
      },
    ];
  }
}

// Компонент для страницы Projects
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
