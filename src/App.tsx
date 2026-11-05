import "./assets/index.css";

import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

const Hero = lazy(() => import("./components/hero"));
const About = lazy(() => import("./components/about"));
const Realizations = lazy(() => import("./components/realisations"));
const Expertise = lazy(() => import("./components/Expertise"));
const Contact = lazy(() => import("./components/Contacts"));
import MainNav from "./components/nav-bar";
import Footer from "./components/footer";

function App() {
  const sections = [
    { id: "hero", component: Hero },
    { id: "about", component: About },
    { id: "realizations", component: Realizations },
    { id: "expertise", component: Expertise },
    { id: "contact", component: Contact },
  ];

  return (
    <div className="min-h-screen bg-neutral-300">
      <MainNav />

      <main className="pt-20">
        {sections.map(({ id, component: Section }) => (
          <section
            key={id}
            id={id}
            className={`w-full scroll-mt-24 px-4 ${
              id === "hero"
                ? "flex min-h-[calc(100svh-5rem)] items-center justify-center py-8"
                : "py-12 md:py-16"
            }`}
          >
            <Suspense fallback={<Loading />}>
              <Section />
            </Suspense>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
