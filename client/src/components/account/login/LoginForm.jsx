'use client';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data to the console
    alert('Login Successful!'); // Success alert
    reset(); // Reset the form fields after submission
  };

  return (
    <>
      {/* Form */}
      <form className="px-3 mt-2" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <TextField
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
          id="email"
          label="Email"
          type="email"
          variant="standard"
          className="w-100 my-2"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />

        {/* Password Field */}
        <TextField
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          id="password"
          label="Password"
          type="password"
          variant="standard"
          className="w-100 my-2"
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />

        {/* Submit Button */}
        <button type="submit" className="btn-main w-100 rubik fw-bold rounded my-3">
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginForm;
