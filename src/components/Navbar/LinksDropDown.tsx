import { links } from '@/constants/links';
import { useAppSelector } from '@/redux-store/hooks';
import { AlignLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

function LinksDropDown() {
  const user = useAppSelector((store) => store.userState.user);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='lg:hidden'>
          <Button variant='outline' size='icon'>
            <AlignLeft />
            <span className='sr-only'>Toggle Links</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-52 lg:hidden'
          align='start'
          sideOffset={25}
        >
          {links.map((link) => {
            const restrictedRoutes =
              link.href === 'checkout' || link.href === 'orders';
            if (restrictedRoutes && !user) return null;
            return (
              <DropdownMenuItem key={link.label}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) => {
                    return `capitalize w-full ${isActive ? 'text-primary' : ''
                      }`;
                  }}
                >
                  {link.label}
                </NavLink>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LinksDropDown;
