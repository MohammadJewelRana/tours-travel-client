/* eslint-disable react/jsx-sort-props */
"use client";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <section className="py-12 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto border md:border-none p-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-red-500">
                  {errors.name.message as string}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: "Message is required" })}
                className={`mt-1 block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Your Message"
              />
              {errors.message && (
                <span className="text-red-500">
                  {errors.message?.message as string}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
