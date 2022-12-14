/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import UseEmail from "../components/UseEmail";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    sendExample(formData);
    console.log(formData.message.toString());
  };
  //send email with herotofu
  const { loading, submitted, error, sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/ffa45330-5ffc-11ed-b82c-5d75eaa7ccff"
  );

  const sendExample = ({ name, email, subject, message }) => {
    // Can be any data, static and dynamic
    sendEmail({
      userName: name,
      userMail: email,
      subject: subject,
      message: message,
    });
  };
  return (
    <div className="  h-full p-2 border rounded-xl border-[#313131] px-5 w-full md:w-4/6 lg:w-3/6 flex flex-col ">
      {" "}
      <h2 className="underline underline-offset-4 tracking-widest mb-5">
        Contact
      </h2>{" "}
      <div className="  flex flex-col space-y-10">
        <h4 className=" text-lg font-semibold text-center">
          I've got just what you need. <br />
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className=" text-lg md:text-2xl">+905526931892</p>
          </div> */}

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className=" text-md ">mail@muratcanyuksel.tech</p>
          </div>

          {/* <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">23 dev lane</p>
          </div> */}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex flex-col md:flex-row md:space-x-2  space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7Ab0A] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
        <div className="w-screen flex justify-center text-xl">
          {submitted && "Done, email was sent!"}
          {error ? `Unexpected error: ${error}` : null}
          {loading && "Email is being sent now..."}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
