import React from "react";
import { useForm } from "react-hook-form";

// Main App Component containing the entire Form Field UI directly
const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission data
  const onSubmit = (data) => {
    // This will log all registered field values to the console on submission
    console.log("Form Data", data);
  };

  return (
    <div className="p-4 sm:p-8 font-sans bg-white shadow-2xl rounded-xl border border-gray-200 max-w-5xl mx-auto my-8">
      {/* Form wrapper with react-hook-form handler */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-6" // The grid is now part of the form
      >
        {/* Row 1: Select Country */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select country
          </label>
          <div className="relative">
            <select
              {...register("country")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150 text-gray-500"
            >
              <option value="" className="text-gray-900">
                Select country
              </option>
              <option className="text-gray-900" value="Pakistan">
                Pakistan
              </option>
              <option className="text-gray-900" value="Turkey">
                Turkey
              </option>
              <option className="text-gray-900" value="Yemen">
                Yemen
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 1: Select Class Preference */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select class preference
          </label>
          <div className="relative">
            <select
              {...register("classPreference")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-500 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Select class preference</option>
              <option className="text-gray-900" value="Online">
                Online
              </option>
              <option className="text-gray-900" value="Onsite">
                Onsite
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 2: Select Gender */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select gender
          </label>
          <div className="relative">
            <select
              {...register("gender")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-500 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Select gender</option>
              <option className="text-gray-900" value="Male">
                Male
              </option>
              <option className="text-gray-900" value="Female">
                Female
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 2: Select City */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select city
          </label>
          <div className="relative">
            <select
              {...register("city")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Select city</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 3: Select Course or Event */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select course or event
          </label>
          <div className="relative">
            <select
              {...register("courseOrEvent")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Select course or event</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 3: Full Name */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Full name</label>
          <input
            {...register("fullName", {
              required: "Enter Your Valid Name",
              maxLength:{
                value:5,
                message:"Full name Value Must Be less than 5"
              },
              minLength:{
                value:2,
                message:"Full Name Should be greater than 2"
              }
            })} // Registered field
            type="text"
            placeholder="Full name"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white text-gray-900"
          />
          {errors.fullName && (
            <p className="text-md text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* Row 4: Father Name */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Father name
          </label>
          <input
            type="text"
            {...register("fatherName")} // Registered field
            placeholder="Father name"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white text-gray-900"
          />
        </div>

        {/* Row 4: Email */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email")} // Registered field
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white text-gray-900"
          />
        </div>

        {/* Row 5: Phone */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            {...register("phone")} // Registered field
            placeholder="Phone"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white text-gray-900"
          />
        </div>

        {/* Row 5: CNIC */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">CNIC</label>
          <input
            type="text"
            {...register("cnic")} // Registered field
            placeholder="CNIC"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white text-gray-900"
          />
        </div>

        {/* Row 6: Father's CNIC (optional) */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Father's CNIC (optional)
          </label>
          <input
            type="text"
            {...register("fatherCnic")} // Registered field
            placeholder="Father's CNIC (optional)"
            className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white text-gray-900"
          />
        </div>

        {/* Row 6: Date of birth */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Date of birth
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("dateOfBirth")} // Registered field
              placeholder="mm/dd/yyyy"
              className="p-3 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 pr-10"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Row 7: Computer Proficiency */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Select your computer proficiency
          </label>
          <div className="relative">
            <select
              {...register("computerProficiency")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Select your computer proficiency</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 7: Have a Laptop? */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Do you have a Laptop?
          </label>
          <div className="relative">
            <select
              {...register("hasLaptop")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Do you have a Laptop?</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 8 (Full Width Qualification) */}
        <div className="col-span-12 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Last qualification
          </label>
          <div className="relative">
            <select
              {...register("lastQualification")} // Registered field
              className="appearance-none w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150"
            >
              <option value="">Last qualification</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 9 (Full Width Address) */}
        <div className="col-span-12">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <textarea
              {...register("address")} // Registered field
              placeholder="Address"
              rows="3"
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            ></textarea>
          </div>
        </div>

        {/* Row 10 (Picture Upload) */}
        <div className="col-span-12 md:col-span-6 flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">Picture</label>
          <div className="flex items-start p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-150">
            <div className="flex flex-col space-y-2">
              {/* Add a hidden file input and register it */}
              <input
                type="file"
                {...register("picture")}
                id="pictureUpload"
                className="hidden"
              />
              <label
                htmlFor="pictureUpload"
                className="flex items-center justify-center px-4 py-2 border border-gray-400 text-gray-700 text-sm font-medium rounded-lg shadow-sm hover:bg-gray-200 transition duration-150 w-32 cursor-pointer"
              >
                + Upload
              </label>
              <div className="text-xs text-gray-500 space-y-1">
                <p>With white or blue background</p>
                <p>File size must be less than 1MB</p>
                <p>File type must be JPG</p>
                <p>Upload your recent passport size picture</p>
                <p>Your Face should be clearly visible without any Glasses</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Form Grid Layout */}

        {/* Separator and Policy/Submit */}
        <div className="col-span-12">
          <hr className="my-8 border-t border-gray-200" />
        </div>

        {/* Policy text UI - Re-integrated */}
        <div className="col-span-12 space-y-4">
          <p className="text-sm text-gray-700">
            1. I hereby solemnly declare that the data and facts mentioned
            herein are true and correct to the best of my knowledge. Further, I
            will abide by all the established and future regulations and
            policies of SMIT
          </p>
          <p className="text-sm text-gray-700">
            2. I hereby accept the responsibility of good deportment and
            guarantee that I will not be involved in any other activity,
            political or ethical, but learning during my stay in the program.
          </p>
          <p className="text-sm text-gray-700">
            3. Refunding of fees after any admission cannot at any point in
            time.
          </p>
          <p className="text-sm text-gray-700">
            4. Upon completion of the course, I will complete the required
            project by SMIT.
          </p>
          <p className="text-sm text-gray-700">
            5. It's mandatory for female students to wear abaya/hijab in the
            class
          </p>
        </div>

        {/* reCAPTCHA Placeholder UI - Re-integrated and Registered */}
        <div className="col-span-12 mt-8 flex items-center space-x-4">
          <div className="border border-gray-300 rounded-sm p-2 flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("isRobot")} // Registered field
              className="form-checkbox h-4 w-4 text-blue-600 rounded"
            />
            <label className="text-sm font-medium text-gray-700">
              I'm not a robot
            </label>
          </div>
          {/* Mock reCAPTCHA logo/branding */}
          <div className="text-xs text-gray-400">
            <p>Privacy - Terms</p>
            <p>RECEPTIONS PROTECTED BY</p>
          </div>
        </div>

        {/* Submit Button UI */}
        <div className="col-span-12 mt-10 pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default HookForm;
