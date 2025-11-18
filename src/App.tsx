import "./assets/index.css";

import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Hero = lazy(() => import("./components/hero"));
const About = lazy(() => import("./components/about"));
const Projects = lazy(() => import("./components/projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contacts"));
import MainNav from "./components/nav-bar";
import Footer from "./components/footer";

function App() {
  const sections = [
    { id: "hero", component: Hero },
    { id: "about", component: About },
    { id: "projects", component: Projects },
    { id: "services", component: Services },
    { id: "contact", component: Contact },
  ];

  return (
    <div className="bg-neutral-300 min-h-screen pt-20">
      <MainNav />

      {sections.map(({ id, component: Section }) => (
        <section
          key={id}
          id={id}
          className="min-h-screen flex justify-center items-center px-4"
        >
          <Suspense fallback={<Loading />}>
            <Section />
          </Suspense>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default App;
