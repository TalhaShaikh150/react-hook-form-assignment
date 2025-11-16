import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  const labelClass = "text-gray-300 text-sm font-medium";
  const errorClass = "text-red-400 text-xs mt-1";
  const inputClass =
    "p-3 bg-[#1a1c23] border border-gray-600 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-full";
  return (
    <div className="p-6 sm:p-10 font-sans bg-[#0f1116] text-white rounded-2xl shadow-2xl border border-gray-700 max-w-5xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
        SMIT Admission Form
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-6"
      >
        {/* COUNTRY */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Country</label>
          <select
            {...register("country", { required: "Country is required" })}
            className={inputClass}
          >
            <option value="">Select country</option>
            <option value="Pakistan">Pakistan</option>
          </select>
          {errors.country && (
            <p className={errorClass}>{errors.country.message}</p>
          )}
        </div>

        {/* CLASS PREFERENCE */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Class Preference</label>
          <select
            {...register("classPreference", {
              required: "Class preference is required",
            })}
            className={inputClass}
          >
            <option value="">Select class preference</option>
            <option value="Online">Online</option>
            <option value="Onsite">Onsite</option>
          </select>
          {errors.classPreference && (
            <p className={errorClass}>{errors.classPreference.message}</p>
          )}
        </div>

        {/* GENDER */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className={inputClass}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className={errorClass}>{errors.gender.message}</p>
          )}
        </div>

        {/* CITY */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>City</label>
          <select
            {...register("city", { required: "City is required" })}
            className={inputClass}
          >
            <option value="">Select city</option>
            <option value="Karachi">Karachi</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Islamabad">Islamabad</option>
          </select>
          {errors.city && <p className={errorClass}>{errors.city.message}</p>}
        </div>

        {/* COURSE */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Course / Event</label>
          <select
            {...register("courseOrEvent", {
              required: "Course selection is required",
            })}
            className={inputClass}
          >
            <option value="">Select course</option>
            <option value="Agentic AI">Agentic AI</option>
            <option value="Shopify E-Commerce Expert">
              Shopify E-Commerce Expert
            </option>
            <option value="Modern Application Development">
              Modern Application Development
            </option>
            <option value="Graphic Designing With AI">
              Graphic Designing With AI
            </option>
          </select>
          {errors.courseOrEvent && (
            <p className={errorClass}>{errors.courseOrEvent.message}</p>
          )}
        </div>

        {/* FULL NAME */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Full Name</label>
          <input
            type="text"
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
              maxLength: { value: 30, message: "Too long (max 30 chars)" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only alphabets allowed",
              },
            })}
            placeholder="Enter full name"
            className={inputClass}
          />
          {errors.fullName && (
            <p className={errorClass}>{errors.fullName.message}</p>
          )}
        </div>

        {/* FATHER NAME */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Father Name</label>
          <input
            type="text"
            {...register("fatherName", {
              required: "Father name is required",
            })}
            placeholder="Enter father name"
            className={inputClass}
          />
          {errors.fatherName && (
            <p className={errorClass}>{errors.fatherName.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            placeholder="example@gmail.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* PHONE */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Phone must be 11 digits",
              },
            })}
            placeholder="03XXXXXXXXX"
            className={inputClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        {/* CNIC */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>CNIC</label>
          <input
            type="text"
            {...register("cnic", {
              required: "CNIC is required",
              pattern: {
                value: /^[0-9]{13}$/,
                message: "CNIC must be 13 digits",
              },
            })}
            placeholder="13-digit CNIC"
            className={inputClass}
          />
          {errors.cnic && <p className={errorClass}>{errors.cnic.message}</p>}
        </div>

        {/* FATHER CNIC OPTIONAL */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Father CNIC (Optional)</label>
          <input
            type="text"
            {...register("fatherCnic", {
              pattern: {
                value: /^[0-9]{13}$/,
                message: "CNIC must be 13 digits",
              },
            })}
            placeholder="13-digit CNIC"
            className={inputClass}
          />
          {errors.fatherCnic && (
            <p className={errorClass}>{errors.fatherCnic.message}</p>
          )}
        </div>

        {/* DOB */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth", {
              required: "Date of birth is required",
            })}
            className={inputClass}
          />
          {errors.dateOfBirth && (
            <p className={errorClass}>{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* COMPUTER PROFICIENCY */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Computer Proficiency</label>
          <select
            {...register("computerProficiency", {
              required: "Select your proficiency",
            })}
            className={inputClass}
          >
            <option value="">Choose level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          {errors.computerProficiency && (
            <p className={errorClass}>{errors.computerProficiency.message}</p>
          )}
        </div>

        {/* LAPTOP */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Do You Have a Laptop?</label>
          <select
            {...register("hasLaptop", {
              required: "Please select an option",
            })}
            className={inputClass}
          >
            <option value="">Choose one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.hasLaptop && (
            <p className={errorClass}>{errors.hasLaptop.message}</p>
          )}
        </div>

        {/* QUALIFICATION */}
        <div className="col-span-12">
          <label className={labelClass}>Last Qualification</label>
          <select
            {...register("lastQualification", {
              required: "Qualification is required",
            })}
            className={inputClass}
          >
            <option value="">Select qualification</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="MPhil">MPhil</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
          {errors.lastQualification && (
            <p className={errorClass}>{errors.lastQualification.message}</p>
          )}
        </div>

        {/* ADDRESS */}
        <div className="col-span-12">
          <label className={labelClass}>Address</label>
          <textarea
            {...register("address", {
              required: "Address is required",
              minLength: { value: 10, message: "Minimum 10 characters" },
            })}
            rows="3"
            placeholder="Enter your address"
            className={inputClass}
          ></textarea>
          {errors.address && (
            <p className={errorClass}>{errors.address.message}</p>
          )}
        </div>

        {/* PICTURE UPLOAD */}
        <div className="col-span-12 md:col-span-6">
          <label className={labelClass}>Upload Picture</label>
          <input
            type="file"
            {...register("picture", {
              required: "Picture is required",
            })}
            className="text-gray-200"
          />
          {errors.picture && (
            <p className={errorClass}>{errors.picture.message}</p>
          )}
        </div>

        {/* ROBOT CHECK */}
        <div className="col-span-12 flex items-center space-x-3 mt-4">
          <input
            type="checkbox"
            {...register("isRobot", {
              required: "Please verify you are not a robot",
            })}
            className="h-5 w-5"
          />
          <label className={labelClass}>I'm not a robot</label>
        </div>
        {errors.isRobot && (
          <p className={errorClass + " col-span-12"}>
            {errors.isRobot.message}
          </p>
        )}

        {/* SUBMIT BUTTON */}
        <div className="col-span-12 mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default HookForm;
