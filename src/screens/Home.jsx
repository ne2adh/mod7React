import Body from "../Components/Home/Body.jsx";
import Footer from "../Components/Home/Footer.jsx";
import OpenLink from "../Components/Core/OpenLink.jsx";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import githubLogo from "../assets/github.svg";

import { useSelector } from "react-redux";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <span>{count}</span>
      <br />
      <OpenLink
        redirectUrl="https://react.dev"
        logoImage={reactLogo}
      ></OpenLink>
      <OpenLink redirectUrl="https://vite.dev" logoImage={viteLogo}></OpenLink>
      <OpenLink
        redirectUrl="https://github.com/ne2adh/mod7React.git"
        logoImage={githubLogo}
      ></OpenLink>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default Home;
