import React, { useState } from "react";
import { ShieldCheck, AlertCircle, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // 1. Frontend Validation
    if (!email || !password || !role) {
      setError("Please enter your email, password and select your role.");
      return;
    }

    try {
      // 2. Call your ASP.NET Backend API
      const response = await fetch("http://localhost:5142/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // 3. Success Case
        setError("");
        console.log("Login successful:", result);

        // Optional: Save user role/email to localStorage so Dashboard can use it
        localStorage.setItem("userRole", result.role);
        localStorage.setItem("userEmail", result.email);

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        // 4. Backend Validation Error (e.g. Invalid password or wrong role)
        setError(result.message || "Invalid login credentials.");
      }
    } catch (err) {
      // 5. Network Error
      console.error("Login error:", err);
      setError("Cannot connect to server. Is the backend running?");
    }
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col items-center pt-12 px-4 font-sans'>
      {/* Top Logo */}
      <Link to='/' className='flex items-center gap-2 mb-10 hover:opacity-80 transition-opacity'>
        <div className='bg-[#00c288] p-1 rounded-md'>
          <ShieldCheck className='text-white w-6 h-6' />
        </div>
        <span className='text-2xl font-bold tracking-tight text-slate-800 uppercase'>observeX</span>
      </Link>

      {/* Login Card */}
      <div className='w-full max-w-[450px] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden'>
        <div className='p-10'>
          <h1 className='text-2xl font-bold text-slate-800 mb-2'>Sign in</h1>
          <p className='text-slate-500 mb-8'>Welcome back! Please enter your details.</p>

          {error && (
            <div className='mb-6 flex items-center gap-2 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm animate-in fade-in zoom-in'>
              <AlertCircle size={16} className='shrink-0' />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className='space-y-6'>
            {/* Email Field */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Enter your email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@gmail.com'
                className='w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-[#00c288] transition-colors'
              />
            </div>

            {/* Password Field */}
            <div>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Enter password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='••••••••'
                className='w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-[#00c288] transition-colors'
              />
            </div>

            {/* Role Field */}
            <div className='relative'>
              <label className='block text-sm font-semibold text-slate-700 mb-2'>Sign in as</label>
              <div className='relative'>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className='w-full appearance-none px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-[#00c288] bg-white transition-colors cursor-pointer text-slate-700'>
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

            {/* Sign in Button */}
            <button
              type='submit'
              className='w-full bg-[#00c288] hover:bg-[#00b377] text-white font-bold py-3.5 rounded-md transition-all active:scale-[0.98] shadow-sm'>
              Sign in
            </button>
          </form>

          <div className='mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4'>
            <Link
              to='/signup'
              className='w-full text-center border border-slate-200 py-3 rounded-md hover:bg-slate-50 transition-colors font-bold text-slate-700'>
              Create an account
            </Link>
            <button className='text-slate-400 text-sm hover:underline'>Forgot your password?</button>
          </div>
        </div>
      </div>

      <div className='mt-8 text-slate-400 text-xs pb-8'>© 2026 ObserveX. All rights reserved.</div>
    </div>
  );
};

export default LoginPage;
