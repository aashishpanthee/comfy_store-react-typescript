import { FormInput, SEO, SubmitBtn } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { axiosInstance } from '@/config';
import { toast } from '@/hooks/use-toast';
import { useFormValidation } from '@/hooks/useFormValidation';
import { registerValidationRules } from '@/utils';
import { AxiosError } from 'axios';
import { ActionFunction, Form, Link, redirect, useActionData } from 'react-router-dom';

export const action: ActionFunction = async ({
  request,
}): Promise<Response | { error: string } | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await axiosInstance.post(`/auth/local/register`, data);
    toast({
      description: 'Registration successful',
    });
    return redirect('/login');
  } catch (error) {
    console.log(error);
    const errorMesg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : 'Registration failed';

    toast({
      description: errorMesg,
      variant: 'destructive',
    });
    return { error: errorMesg };
  }
};

function Signup() {
  const { errors, touched, handleBlur, handleSubmit } = useFormValidation(registerValidationRules);
  const actionData = useActionData() as { error?: string } | undefined;

  return (
    <section className='grid h-screen place-items-center'>
      <SEO
        title="Sign Up"
        description="Create a new Comfy Store account"
      />
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post' onSubmit={handleSubmit}>
            <div>
              <FormInput
                type='text'
                name='username'
                onBlur={handleBlur}
              />
              {touched.username && errors.username && (
                <p className='mt-1 text-sm text-red-500'>{errors.username}</p>
              )}
            </div>
            <div>
              <FormInput
                type='email'
                name='email'
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
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
            <SubmitBtn text='Sign up' className='w-full mt-4' />

            <p className='mt-4 text-center'>
              Already a member?
              <Link to='/login' className='ml-1 text-primary'>Login</Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Signup;
