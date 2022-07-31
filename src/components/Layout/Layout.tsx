import React from 'react';
import Title from './Title';

type Props = {
  children:
    | React.ReactElement<HTMLParagraphElement | HTMLHeadElement>[]
    | React.ReactElement<HTMLParagraphElement | HTMLHeadElement>;
};

const Layout: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <Title />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
