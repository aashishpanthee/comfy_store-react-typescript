import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ModeToggle from './ModeToggle';
import CartButton from './CartButton';

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=' bg-muted py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropDown />
        <NavLinks />
        <div className='flex justify-center items-center gap-x-4'>
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
