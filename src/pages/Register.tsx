import { ActionFunction, Form, Link, redirect } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmitBtn, FormInput } from '@/components';
import { axiosInstance } from '@/config';
import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';

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
  return (
    <section className='grid h-screen place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post'>
            <FormInput type='text' name='username' />
            <FormInput type='email' name='email' />
            <FormInput type='password' name='password' />

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
