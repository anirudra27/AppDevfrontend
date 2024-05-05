import styles from "./links.module.css";
import NavLink from "./navlink/Navlink";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;