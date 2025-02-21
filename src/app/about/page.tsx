import Header from "@/components/Header";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="main-text">About me</h1>
        <section className="container">
          <p className="main-text description">
            Hello! My name is Ivan, and I am developing software provision. I
            have experience with JavaScript, TypeScript, React, Next.js and
            other modern technologies. In my free time I love learn new tools
            and share your knowledge with others.
          </p>
        </section>

        <h2 className="main-text">Contact details</h2>
        <section className="container">
          <Link href="https://t.me/ivanlein17">
            <p className="main-text">-Telegram</p>
          </Link>
          <Link href="mailto: ivanlein12354@gmail.com">
            <p className="main-text">-Email</p>
          </Link>
          <Link href="https://github.com/ivanlein">
            <p className="main-text">-GitHub</p>
          </Link>
          <Link href="https://leetcode.com/u/ivanlein17">
            <p className="main-text">-LeetCode</p>
          </Link>
        </section>

        <h2 className="main-text">About me</h2>
        <section className="container">
          <p className="main-text">
            Communicative and responsible developer with experience in creating
            pet projects and freelance orders. I learn quickly and adapt easily
            changes and work effectively in a team. I strive for quality results
            and continuous professional growth.
          </p>
        </section>

        <h2 className="main-text">Skills</h2>
        <section className="container">
          <p className="main-text">
            Programming languages: JavaScript (ES6+), TypeScript
          </p>

          <p className="main-text">Frontend: HTML5, CSS3, SASS, Tailwind CSS</p>

          <p className="main-text">
            Libraries and frameworks: React, Next.js, Redux, Redux Toolkit
          </p>

          <p className="main-text">Tools: Webpack, Vite, Git, npm</p>

          <p className="main-text"> API: Axios, REST API</p>

          <p className="main-text">Additionally: Figma</p>
        </section>

        <h2 className="main-text">Experience</h2>
        <section className="container">
          <ul>
            <li>
              <p>Freelancing (since November 2024)</p>
            </li>

            <li>
              <p>Pet projects (since June 2024)</p>
            </li>
          </ul>
        </section>

        <h2 className="main-text">Education</h2>
        <section className="container">
          <ul>
            <li>
              <p>Courses: Sololearn (JavaScript, HTML, CSS) – 2024.</p>
            </li>
            <li>
              <p>Platforms: Learn JavaScript, Codewars, LeetCode.</p>
            </li>
          </ul>
        </section>

        <h2 className="main-text">Key qualities</h2>
        <section className="container">
          <p className="main-text">
            Communication skills and ability to work in a team.
          </p>

          <p className="main-text">
            Rapid learning and application of new technologies.
          </p>

          <p className="main-text">
            Responsibility and desire for quality results.
          </p>

          <p className="main-text">
            Willingness to change and work in a dynamic environment.
          </p>

          <p className="main-text">
            Openness to feedback and continuous development.
          </p>
        </section>
      </div>
    </>
  );
}
