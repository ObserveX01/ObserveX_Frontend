import React, { useState } from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  // State for error handling
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // 1. Check if fields are empty
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // 2. Check if password is long enough
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // 3. MANDATORY: Check if Terms and Conditions are accepted
    if (!agreed) {
      setError("You must agree to the Terms & Conditions and Privacy Policy to continue.");
      return;
    }

    // If all checks pass
    setError("");
    console.log("Signup Attempt:", { email, password, agreed });

    // Logic for API call would go here
    alert("Account created successfully!");
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col items-center pt-8 px-4 font-sans'>
      {/* Top Logo - Links back to Home */}
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

          {/* Dynamic Error Message Box */}
          {error && (
            <div className='mb-6 flex items-center gap-2 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm animate-in fade-in zoom-in duration-300'>
              <AlertCircle size={16} className='shrink-0' />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignup} className='space-y-6'>
            {/* Email Field */}
            <div>
              <label className='block text-sm font-medium text-slate-600 mb-2'>Email address</label>
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

            {/* Password Field */}
            <div>
              <label className='block text-sm font-medium text-slate-600 mb-2'>Password (min. 8 characters)</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className={`w-full px-4 py-3 rounded-md border ${
                  error && (!password || password.length < 8) ? "border-red-500" : "border-slate-200"
                } focus:outline-none focus:border-[#00c288] transition-colors`}
              />
            </div>

            {/* Terms and Privacy Checkbox Section */}
            <div className='flex flex-col gap-1'>
              <div className='flex items-start gap-3'>
                <input
                  type='checkbox'
                  id='terms-checkbox'
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className={`mt-1 w-4 h-4 accent-[#00c288] cursor-pointer ${
                    error && !agreed ? "ring-2 ring-red-200" : ""
                  }`}
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
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-[#00c288] hover:bg-[#00b377] text-white font-bold py-3.5 rounded-md transition-all active:scale-[0.98] shadow-sm'>
              Sign up
            </button>
          </form>
        </div>

        {/* Support Footer */}
        <div className='bg-[#f8fafc] border-t border-slate-100 p-8'>
          <h3 className='text-lg font-bold text-[#004242] mb-3'>Here to take a test?</h3>
          <p className='text-sm text-slate-600 leading-relaxed'>
            No need to sign up. If you are a test-taker and got lost, please visit our {/* LINK UPDATED HERE */}
            <Link to='/help' className='text-[#00c288] hover:underline font-bold'>
              Help Center
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Page Footer */}
      <div className='mt-8 text-slate-400 text-xs pb-8'>&copy; 2026 ObserveX. All rights reserved.</div>
    </div>
  );
};

export default SignupPage;
