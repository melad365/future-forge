import Head from "../../components/Head";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
export type ContactSchema = z.infer<typeof contactSchema>;

function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactSchema) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <Head page="Contact Us" />
      </div>
      <div className="container mx-auto py-8 px-4 md:py-12 mt-8 md:mt-12">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1
              className="text-2xl font-bold text-gray-800 capitalize lg:text-4xl
              text-center md:text-left
            "
            >
              Contact us for <br /> more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <IconMapPin className="w-6 h-6 mx-2 text-[#F8A600]" />

                <span className="mx-2 text-gray-700 w-72">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <IconPhone className="w-6 h-6 mx-2 text-[#F8A600]" />

                <span className="mx-2 text-gray-700 truncate w-72">
                  (257) 563-7401
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <IconMail className="w-6 h-6 mx-2 text-[#F8A600]" />

                <span className="mx-2 text-gray-700 truncate w-72">
                  acb@example.com
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
              <h1 className="text-lg font-medium text-gray-700">
                Please tell us about your project.
              </h1>

              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 focus:outline-none "
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 focus:outline-none  "
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 md:h-48  focus:outline-none "
                    placeholder="Message"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#f8a600] hover:bg-[#eba10e] focus:outline-none">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
