import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({
  text,
  className,
  disabled,
}: {
  text: string;
  className?: string;
  disabled?: boolean;
}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Button type='submit' className={className} disabled={isSubmitting || disabled}>
      {isSubmitting ? (
        <span className='flex '>
          <ReloadIcon className='w-4 h-4 mr-2 animate-spin' />
          Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
};
export default SubmitBtn;
