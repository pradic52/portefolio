import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";

function MainNav() {
  const { t } = useTranslation();

  return (
    <Nav
      className="justify-content-center fixed-top bg-light shadow"
      defaultActiveKey="/home"
      style={{ scrollBehavior: "smooth" }}
    >
      <Nav.Item>
        <Nav.Link eventKey="/home" href="#home">
          {t("Home")}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/about" href="#about">
          {t("About")}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/skills" href="#skills">
          {t("Skills")}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/projects" href="#projects">
          {t("Projects")}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contact" href="#contact">
          {t("Contact")}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MainNav;
