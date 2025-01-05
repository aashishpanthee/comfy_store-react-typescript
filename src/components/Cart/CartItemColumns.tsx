import { formatAsDollars } from '@/utils';
import { useAppDispatch } from '@/redux-store/hooks';
import { Button } from '@/components/ui/button';
import { editItem, removeItems } from '@/redux-store/cart/cartSlice';
import SelectProductAmount from '../common/SelectProductAmount';
import { Mode } from '../common/SelectProductAmount';
export const ThirdColumn = ({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) => {
  const dispatch = useAppDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItems(cartID));
  };

  const setAmount = (value: number) => {
    dispatch(editItem({ cartID, amount: value }));
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button variant='link' className='-ml-4' onClick={removeItemFromTheCart}>
        remove
      </Button>
    </div>
  );
};

export const FirstColumn = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className='object-cover w-24 h-24 rounded-lg sm:h-32 sm:w-32'
    />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className='sm:ml-4 md:ml-12 sm:w-48'>
      <h3 className='font-medium capitalize'>{title}</h3>
      <h4 className='mt-2 text-sm capitalize'>{company}</h4>
      <p className='flex items-center mt-4 text-sm capitalize gap-x-2'>
        color :
        <span
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: productColor,
          }}
        ></span>
      </p>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: string }) => {
  return <p className='font-medium sm:ml-auto'>{formatAsDollars(price)}</p>;
};
