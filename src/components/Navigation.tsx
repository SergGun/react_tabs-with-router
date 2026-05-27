import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation = () => {
  const getNavClass = ({ isActive }: NavLinkRenderProps) =>
    classNames('navbar-item', { 'is-active': isActive });

  return (
    <nav
      className="navbar is-light has-navbar-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" end className={getNavClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
