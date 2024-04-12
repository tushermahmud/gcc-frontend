import React from 'react';
import Header from './Header'; // Assume you have a Header component

type Props = {
    children: React.ReactNode;
}
        
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;