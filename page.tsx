export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>👋 Welcome to My Portfolio</h1>
        <p style={styles.subtitle}>
          I am a Web Developer building modern web applications.
        </p>

        <nav style={styles.nav}>
          <a style={styles.link} href="/portfolio">Portfolio</a>
          <a style={styles.link} href="/skills">Skills</a>
          <a style={styles.link} href="/achievements">Achievements</a>
          <a style={styles.link} href="/education">Education</a>
          <a style={styles.link} href="/resume">Resume</a>
        </nav>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eaecf7, #764ba2)",
    fontFamily: "Arial",
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    padding: "40px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    textAlign: "center",
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "20px",
    opacity: 0.9,
  },

  nav: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  link: {
    padding: "10px 15px",
    background: "white",
    color: "#333",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s",
  },
};