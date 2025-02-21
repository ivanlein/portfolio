import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Ivan Lein</h1>
        <p>Frontend developer creating modern and user-friendly interfaces.</p>
        <Link href="/projects" className="cta-button">
          View my projects
        </Link>
      </div>
    </section>
  );
}
