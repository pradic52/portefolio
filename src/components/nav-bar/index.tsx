import Nav from "react-bootstrap/Nav";

function MainNav() {
  const persoStyle:string = "text-dark text-uppercase"
  return (
    <Nav
      className="justify-content-center d-flex align-items-center fixed-top shadow bg-dark-subtle"
      defaultActiveKey={"/home"}
      variant="underline"
      style={{ scrollBehavior: "smooth", height:60}}
    >
      <Nav.Item>
        <Nav.Link eventKey="/home" href="#home" className={persoStyle}>
          Acceuil
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/about" href="#about" className={persoStyle}>
          A propos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/skills" href="#skills" className={persoStyle}>
          Compétences
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/projects" href="#projects" className={persoStyle}>
          Projets
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contact" href="#contact" className={persoStyle}>
          Contactes
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default MainNav;

