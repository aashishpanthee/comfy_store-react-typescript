import { FormInput, SubmitBtn } from '@/components';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { axiosInstance } from '@/config';
import { toast } from '@/hooks/use-toast';
import { useFormValidation } from '@/hooks/useFormValidation';
import { registerValidationRules } from '@/utils/validation/registerValidation';
import { AxiosError } from 'axios';
import { ActionFunction, Form, Link, redirect } from 'react-router-dom';

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
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
    });
    return null;
  }
};

function Register() {
  const { errors, touched, handleBlur, handleSubmit } = useFormValidation(registerValidationRules);

  return (
    <section className='grid h-screen place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
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

            <SubmitBtn text='Register' className='w-full mt-4' />

            <p className='mt-4 text-center'>
              Already a member?
              <Button type='button' asChild variant='link'>
                <Link to='/login'>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Register;
