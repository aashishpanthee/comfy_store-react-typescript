import CartButton from './CartButton';
import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import ModeToggle from './ModeToggle';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav className='sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='py-4 align-element'>
        <div className='flex items-center justify-between'>
          <Logo />
          <LinksDropDown />
          <NavLinks />
          <div className='flex items-center gap-x-3'>
            <ModeToggle />
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
