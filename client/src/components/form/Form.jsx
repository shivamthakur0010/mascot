import './Form.css';
import { useForm } from 'react-hook-form';

const Form = () => {
  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
    reset(); // Reset form fields
  };

  return (
    <>
      <div className="container">
        <div className="contactus-container container mt-3 ">
          {/* Form with onSubmit handler */}
          <form className="contactus-form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* First Name and Email */}
              <div className="col-md-6 contactus-form-group mb-3">
                <label htmlFor="name" className="contactus-label form-label text-muted">Your Name*</label>
                <input
                  type="text"
                  className="contactus-input border form-control"
                  id="name"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>

              <div className="col-md-6 contactus-form-group mb-3">
                <label htmlFor="email" className="contactus-label form-label text-muted">Your Email*</label>
                <input
                  type="email"
                  className="contactus-input border form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>
            </div>

            <div className="row">
              {/* Subject and Phone Number */}
              <div className="col-md-6 contactus-form-group mb-3">
                <label htmlFor="subject" className="contactus-label form-label text-muted">Subject*</label>
                <input
                  type="text"
                  className="contactus-input border form-control"
                  id="subject"
                  placeholder="Subject"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <p className="text-danger">{errors.subject.message}</p>}
              </div>

              <div className="col-md-6 contactus-form-group mb-3">
                <label htmlFor="phone" className="contactus-label form-label text-muted">Your Phone Number*</label>
                <input
                  type="text"
                  className="contactus-input border form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Invalid phone number',
                    },
                  })}
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Message Box */}
            <div className="contactus-form-group mb-3">
              <label htmlFor="message" className="contactus-label form-label text-muted">Comment</label>
              <textarea
                className="contactus-textarea form-control border contactus-input-textarea"
                id="message"
                rows="2"
                placeholder="Write your message"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="text-danger">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-main">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
