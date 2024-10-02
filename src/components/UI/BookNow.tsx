"use client";
import { useForm } from 'react-hook-form';

const BookNow = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
    // Handle form submission logic (e.g., sending data to a server)
  };

  return (
    <div className="mx-auto p-6 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Book Now</h2>
    
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <span className="text-red-500">{errors.name.message as string}</span>}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required' })}
            className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
          />
          {errors.phone && <span className="text-red-500">{errors.phone.message as string}</span>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500">{errors.email.message as string}</span>}
        </div>

        <div>
          <label htmlFor="people" className="block mb-1">Number of People:</label>
          <input
            type="number"
            id="people"
            {...register('people', { required: 'Number of people is required', min: 1 })}
            className={`border p-2 w-full ${errors.people ? 'border-red-500' : ''}`}
          />
          {errors.people && <span className="text-red-500">{errors.people.message as string}</span>}
        </div>

        <div>
          <label htmlFor="country" className="block mb-1">Country/Residence:</label>
          <input
            type="text"
            id="country"
            {...register('country', { required: 'Country is required' })}
            className={`border p-2 w-full ${errors.country ? 'border-red-500' : ''}`}
          />
          {errors.country && <span className="text-red-500">{errors.country.message as string}</span>}
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookNow;
