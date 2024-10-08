"use client"
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Password match validation
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log(data);  // Log the form data to the console
    alert('Form Submitted!');  // Success alert
    reset();  // Reset the form fields after submission
  };

  const password = watch('password'); // Watch password to compare with confirmPassword

  return (
    <>
      {/* Form */}
      <form className="px-3" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name Field */}
        <TextField
          {...register('fullName', { required: 'Full Name is required' })}
          id="fullName"
          label="Full Name"
          variant="standard"
          className="w-100 my-2"
          error={!!errors.fullName}
          helperText={errors.fullName ? errors.fullName.message : ''}
        />

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

        {/* Confirm Password Field */}
        <TextField
          {...register('confirmPassword', {
            required: 'Confirm Password is required',
          })}
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="standard"
          className="w-100 my-2"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
        />

        {/* Phone Number Field */}
        <TextField
          {...register('phone_number', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits',
            },
          })}
          id="phone_number"
          label="Phone Number"
          variant="standard"
          className="w-100 my-2"
          error={!!errors.phone_number}
          helperText={errors.phone_number ? errors.phone_number.message : ''}
        />

        {/* Submit Button */}
        <button type="submit" className="btn-main w-100 rubik fw-bold rounded my-3">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
