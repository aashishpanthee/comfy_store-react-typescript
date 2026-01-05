import { FormInput, SEO, SubmitBtn } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { axiosInstance } from '@/config';
import { SEO_CONTENT } from '@/constants/seoContent';
import { toast } from '@/hooks/use-toast';
import { useFormValidation } from '@/hooks/useFormValidation';
import { type ReduxStore } from '@/redux-store/store';
import { loginUser } from '@/redux-store/user/userSlice';
import { loginValidationRules } from '@/utils';
import { AxiosError, AxiosResponse } from 'axios';
import {
  Form,
  Link,
  redirect,
  useActionData,
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
  const actionData = useActionData() as { error?: string } | undefined;
  const { errors, touched, handleBlur, handleSubmit } = useFormValidation(loginValidationRules);

  return (
    <section className='grid h-screen place-items-center'>
      <SEO
        title={SEO_CONTENT.login.title}
        description={SEO_CONTENT.login.description}
      />
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='POST' onSubmit={handleSubmit}>

            <div>
              <FormInput
                type='email'
                label='email'
                name='identifier'
                onBlur={handleBlur}
              />
              {touched.identifier && errors.identifier && (
                <p className='mt-1 text-sm text-red-500'>{errors.identifier}</p>
              )}
            </div>
            <div>
              <FormInput
                type='password'
                name='password'
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <p className='mt-1 text-sm text-red-500'>{errors.password}</p>
              )}
            </div>
            {actionData?.error && (
              <div className='text-sm text-red-500 '>
                {actionData.error}
              </div>
            )}
            <SubmitBtn text='Login' className='w-full mt-4' />
            <p className='mt-4 text-center'>
              Not a member yet?
              <Link to='/register' className='ml-1 text-primary'>Sign up</Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
