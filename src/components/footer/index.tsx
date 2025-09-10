import { SocialIcon } from "react-social-icons";
const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social networks</h5>
          <ul className="list-unstyled">
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://www.linkedin.com/in/tokpa-noël-doré-237b93303"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://github.com/pradic52"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://x.com/tokpa_noel?t=mfDLpkd9Lb4ej2iOXnArAg&s=09"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://www.instagram.com/pradic_5.2_tnt"
              ></SocialIcon>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Messagerie</h5>
          <ul className="list-unstyled">
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://www.facebook.com/tokpanoel.dore.52"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://www.instagram.com/pradic_5.2_tnt"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://github.com/pradic52"
              ></SocialIcon>
            </li>
            <li>
              <SocialIcon
                bgColor="#6B7280"
                url="https://www.facebook.com/tokpanoel.dore.52"
              ></SocialIcon>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2025 Tokpa Noël Doré — En apprentissage constant en support TI.
    </div>
  </footer>
);

export default Footer;
