import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import C2_data from './C2_data';
import Footer from './Footer.jsx';

const Seminar_application = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());

    emailjs.send("service_lm7yyu5", "template_gq6gnmp", values, "f_6ntZIN-CiHIh4d7")
      .then(
        (response) => {
          console.log("Email sent!", response);
          alert("Your seminar application has been sent successfully!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Error sending seminar application. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="p-6 mx-auto max-w-2xl bg-white rounded-lg shadow-md shadow-slate-400">
        <h1 className="text-3xl font-bold mb-4">Seminar Application Form</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">NAME</label>
            <input type="text" name="user_name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">EMAIL</label>
            <input type="email" name="user_email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">PHONE</label>
            <input type="tel" name="user_phoneno" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your phone number" required />
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">ID</label>
            <input type="text" name="user_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your ID" required />
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">AGE</label>
            <input type="number" name="user_age" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your age" required />
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">GENDER</label>
            <select name="user_gender" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">BRANCH</label>
            <select name="user_branch" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="" disabled>Select your branch</option>
              <option value="Computer">Computer</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">CLASS</label>
            <select name="user_class" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="" disabled>Select your class</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">DIVISION</label>
            <select name="user_division" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="" disabled>Select your division</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">TOPIC</label>
            <select name="user_topic" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
              <option value="" disabled>Select a topic</option>
              {C2_data.map((item) => (
                <option key={item.id} value={item.title}>{item.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block w-10 text-gray-700 text-xl font-medium">QUESTIONS?</label>
            <textarea name="user_questions" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Any questions?" />
          </div>
          <div>
            <button type="submit" className="w-24 bg-blue-500 text-white p-2 rounded-md">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Seminar_application;
