import Title from "./Title";

const Layout = (props) => {
  return (
    <>
      <Title />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
