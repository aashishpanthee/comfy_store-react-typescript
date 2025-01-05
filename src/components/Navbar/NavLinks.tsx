import { links } from '@/utils';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/redux-store/hooks';

function NavLinks() {
  const user = useAppSelector((store) => store.userState.user);
  return (
    <div className='items-center justify-center hidden lg:flex gap-x-4'>
      {links.map((link) => {
        const restrictedRoutes =
          link.href === 'checkout' || link.href === 'orders';
        if (restrictedRoutes && !user) return null;
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? 'text-primary' : ''
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
export default NavLinks;
