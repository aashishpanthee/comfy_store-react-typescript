import { links } from '@/constants/links';
import { useAppSelector } from '@/redux-store/hooks';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  const user = useAppSelector((store) => store.userState.user);
  return (
    <div className='items-center justify-center hidden lg:flex gap-x-1'>
      {links.map((link) => {
        const restrictedRoutes =
          link.href === 'checkout' || link.href === 'orders';
        if (restrictedRoutes && !user) return null;
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-200 relative group ${isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`;
            }}
          >
            {link.label}
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${link.href === '/' ? 'w-0' : 'w-0'}`} />
          </NavLink>
        );
      })}
    </div>
  );
}
export default NavLinks;
