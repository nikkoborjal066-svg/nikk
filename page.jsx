export default function Home() {
  return (
    <main style={styles.container}>
      <h1>👋 Welcome to My Portfolio</h1>
      <p>I am a Web Developer building modern web applications.</p>

      <nav style={styles.nav}>
        <a href="/portfolio">Portfolio</a>
        <a href="/skills">Skills</a>
        <a href="/achievements">Achievements</a>
        <a href="/education">Education</a>
        <a href="/resume">Resume</a>
      </nav>
    </main>
  );
}

const styles = {
  container: { padding: "40px", fontFamily: "Arial" },
  nav: { display: "flex", gap: "15px", marginTop: "20px" },
};