import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ModeToggle from './ModeToggle';
import CartButton from './CartButton';

function Navbar() {
  return (
    <div className='py-4 bg-muted'>
      <div className='flex items-center justify-between align-element'>
        <Logo />
        <LinksDropDown />
        <NavLinks />
        <div className='flex items-center justify-center gap-x-4'>
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
