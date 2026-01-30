import Banner from "../components/Banner";
import HomepageGrid from "../components/Homepage-grid";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | My React Website</title>
        <meta
          name="description"
          content="Welcome to our React website. We build modern, fast, and responsive web applications."
        />
      </Helmet>

      <div className="container-fluid p-0">
        <Banner />
        <HomepageGrid />

        <div style={{ padding: "20px" }}>
          <h1>Welcome to Our Website</h1>

          <p>
            We are a passionate team focused on building modern, fast, and
            user-friendly web applications using React.
          </p>

          <p>
            Our goal is to deliver high-quality digital products that solve real
            problems and provide great user experiences.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Modern React Development</li>
            <li>Clean & Maintainable Code</li>
            <li>Responsive Design</li>
            <li>Performance Focused</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
