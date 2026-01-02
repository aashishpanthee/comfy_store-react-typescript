import { FormInput, SubmitBtn } from '@/components';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { axiosInstance } from '@/config';
import { toast } from '@/hooks/use-toast';
import { useAppDispatch } from '@/redux-store/hooks';
import { type ReduxStore } from '@/redux-store/store';
import { loginUser } from '@/redux-store/user/userSlice';
import { AxiosError, AxiosResponse } from 'axios';
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
  type ActionFunction,
} from 'react-router-dom';

export const action =
  (store: ReduxStore): ActionFunction =>
    async ({ request }): Promise<Response | { error: string } | null> => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);
      try {
        const response: AxiosResponse = await axiosInstance.post(
          '/auth/local',
          data
        );
        const username = response.data.user.username;
        const jwt = response.data.jwt;
        store.dispatch(loginUser({ username, jwt }));
        return redirect('/');
      } catch (error) {
        console.log(error);
        const errorMesg =
          error instanceof AxiosError
            ? error.response?.data.error.message
            : 'Login failed';
        toast({
          description: errorMesg,
          variant: 'destructive',
        });
        return { error: errorMesg }
      }
    };

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const actionData = useActionData() as { error?: string } | undefined;

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await axiosInstance.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate('/');
    } catch (error) {
      toast({ description: 'Login Failed' });
    }
  };

  return (
    <section className='grid h-screen place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='POST'>
            <FormInput type='email' label='email' name='identifier' />
            <FormInput type='password' name='password' />
            {actionData?.error && (
              <div className='text-sm text-red-500 '>
                {actionData.error}
              </div>
            )}
            <SubmitBtn text='Login' className='w-full mt-4' />
            <Button
              type='button'
              variant='outline'
              onClick={loginAsGuestUser}
              className='w-full mt-4'
            >
              Guest User
            </Button>
            <p className='mt-4 text-center'>
              Not a member yet?
              <Button type='button' asChild variant='link'>
                <Link to='/register'>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
