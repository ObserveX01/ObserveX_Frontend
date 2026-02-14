import React, { useState } from "react";
import { ShieldCheck, AlertCircle, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // 1. Added useNavigate

const SignupPage = () => {
  const navigate = useNavigate(); // 2. Initialize navigation

  // State for form inputs
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [agreed, setAgreed] = useState(false);

  // State for error handling
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // 1. Check for empty fields
    if (!email || !phone || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }

    // 2. Phone Number Validation
    const phoneRegex = /^01\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must start with 01 and be exactly 11 digits long.");
      return;
    }

    // 3. Password Length Validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // 4. Agreement Validation (THIS IS WHAT YOU ASKED FOR)
    if (!agreed) {
      setError("You must agree to the Terms & Conditions and Privacy Policy.");
      return; // This stops the code from reaching the fetch call
    }

    // If all checks pass, clear error and call API
    setError("");

    const signupData = {
      email: email,
      phoneNumber: phone,
      password: password,
      role: role,
    };

    try {
      const response = await fetch("http://localhost:5142/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Signup successful! Redirecting to login...`);
        navigate("/login");
      } else {
        setError(result.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Cannot connect to server. Is the backend running?");
    }
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col items-center pt-8 px-4 font-sans'>
      {/* Top Logo */}
      <Link to='/' className='flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity'>
        <div className='bg-[#00c288] p-1 rounded-md'>
          <ShieldCheck className='text-white w-6 h-6' />
        </div>
        <span className='text-2xl font-bold tracking-tight text-slate-800 uppercase'>observeX</span>
      </Link>

      {/* Main Signup Card */}
      <div className='w-full max-w-[480px] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden'>
        <div className='p-10'>
          <h1 className='text-2xl font-bold text-slate-800 mb-2'>Sign up</h1>
          <p className='text-slate-500 mb-8'>Just one more step to create your first test!</p>

          {/* Error Message Box */}
          {error && (
            <div className='mb-6 flex items-center gap-2 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm animate-in fade-in zoom-in'>
              <AlertCircle size={16} className='shrink-0' />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className='space-y-5'>
            {/* Email Field */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Email address</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@gmail.com'
                className={`w-full px-4 py-3 rounded-md border ${
                  error && !email ? "border-red-500" : "border-slate-200"
                } focus:outline-none focus:border-[#00c288] transition-colors`}
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Phone number</label>
              <input
                type='tel'
                maxLength={11}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder='01XXXXXXXXX'
                className={`w-full px-4 py-3 rounded-md border ${
                  error && (phone.length !== 11 || !phone.startsWith("01")) ? "border-red-500" : "border-slate-200"
                } focus:outline-none focus:border-[#00c288] transition-colors`}
              />
              <p className='text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider'>
                Must be 11 digits starting with 01
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Password (min. 8 characters)</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className={`w-full px-4 py-3 rounded-md border ${
                  error && password.length < 8 ? "border-red-500" : "border-slate-200"
                } focus:outline-none focus:border-[#00c288] transition-colors`}
              />
            </div>

            {/* Role Selection Field */}
            <div className='relative'>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>I am a...</label>
              <div className='relative'>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`w-full appearance-none px-4 py-3 rounded-md border ${
                    error && !role ? "border-red-500" : "border-slate-200"
                  } focus:outline-none focus:border-[#00c288] bg-white transition-colors cursor-pointer text-slate-700`}>
                  <option value='' disabled>
                    Select your role
                  </option>
                  <option value='Student'>Student</option>
                  <option value='Teacher'>Teacher</option>
                  <option value='Admin'>Admin</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400'>
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* Checkbox Section */}
            <div className='flex items-start gap-3 pt-2'>
              <input
                type='checkbox'
                id='terms-checkbox'
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className='mt-1 w-4 h-4 accent-[#00c288] cursor-pointer'
              />
              <label
                htmlFor='terms-checkbox'
                className='text-sm text-slate-600 leading-tight cursor-pointer select-none'>
                By signing up I agree to{" "}
                <Link to='/terms' className='text-[#00c288] font-bold hover:underline'>
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to='/privacy' className='text-[#00c288] font-bold hover:underline'>
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-[#00c288] hover:bg-[#00b377] text-white font-bold py-3.5 rounded-md transition-all active:scale-[0.98] shadow-sm mt-2'>
              Sign up
            </button>
          </form>
        </div>

        {/* Footer Support Section */}
        <div className='bg-[#f8fafc] border-t border-slate-100 p-8'>
          <h3 className='text-lg font-bold text-[#004242] mb-3'>Here to take a test?</h3>
          <p className='text-sm text-slate-600 leading-relaxed'>
            No need to sign up. If you are a test-taker and got lost, please visit our{" "}
            <Link to='/help' className='text-[#00c288] hover:underline font-bold'>
              Help Center
            </Link>
            .
          </p>
        </div>
      </div>

      <div className='mt-8 text-slate-400 text-xs pb-8'>© 2026 ObserveX. All rights reserved.</div>
    </div>
  );
};

export default SignupPage;
