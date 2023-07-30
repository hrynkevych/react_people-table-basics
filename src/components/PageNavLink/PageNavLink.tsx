import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  content: string;
};

export const PageNavLink: React.FC<Props> = ({ to, content }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      'navbar-item',
      { 'has-background-grey-lighter': isActive },
    )}
  >
    {content}
  </NavLink>
);