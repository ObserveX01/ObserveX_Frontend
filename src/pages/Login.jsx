// import React, { useState } from "react";
// import { ShieldCheck, AlertCircle, ChevronDown } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // 1. Frontend Validation
//     if (!email || !password || !role) {
//       setError("Please enter your email, password and select your role.");
//       return;
//     }

//     try {
//       // 2. Call your ASP.NET Backend API
//       const response = await fetch("http://localhost:5142/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           role: role,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         // 3. Success Case
//         setError("");
//         console.log("Login successful:", result);

//         // Optional: Save user role/email to localStorage so Dashboard can use it
//         localStorage.setItem("userRole", result.role);
//         localStorage.setItem("userEmail", result.email);

//         // Redirect to dashboard
//         navigate("/dashboard");
//       } else {
//         // 4. Backend Validation Error (e.g. Invalid password or wrong role)
//         setError(result.message || "Invalid login credentials.");
//       }
//     } catch (err) {
//       // 5. Network Error
//       console.error("Login error:", err);
//       setError("Cannot connect to server. Is the backend running?");
//     }
//   };

//   return (
//     <div className='min-h-screen bg-slate-50 flex flex-col items-center pt-12 px-4 font-sans'>
//       {/* Top Logo */}
//       <Link to='/' className='flex items-center gap-2 mb-10 hover:opacity-80 transition-opacity'>
//         {/* <div className='bg-[#00c288] p-1 rounded-md'>
//           <ShieldCheck className='text-white w-6 h-6' />
//         </div> */}
//         <img src={logo} alt='ObserveX Logo' className='w-10 h-10' />
//         <span className='text-2xl font-bold tracking-tight text-slate-800 uppercase'>observeX</span>
//       </Link>

//       {/* Login Card */}
//       <div className='w-full max-w-[450px] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden'>
//         <div className='p-10'>
//           <h1 className='text-2xl font-bold text-slate-800 mb-2'>Sign in</h1>
//           <p className='text-slate-500 mb-8'>Welcome back! Please enter your details.</p>

//           {error && (
//             <div className='mb-6 flex items-center gap-2 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm animate-in fade-in zoom-in'>
//               <AlertCircle size={16} className='shrink-0' />
//               <span>{error}</span>
//             </div>
//           )}

//           <form onSubmit={handleLogin} className='space-y-6'>
//             {/* Email Field */}
//             <div>
//               <label className='block text-sm font-semibold text-slate-700 mb-2'>Enter your email</label>
//               <input
//                 type='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder='name@gmail.com'
//                 className='w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-[#00c288] transition-colors'
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className='block text-sm font-semibold text-slate-700 mb-2'>Enter password</label>
//               <input
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder='••••••••'
//                 className='w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-[#00c288] transition-colors'
//               />
//             </div>

//             {/* Role Field */}
//             <div className='relative'>
//               <label className='block text-sm font-semibold text-slate-700 mb-2'>Sign in as</label>
//               <div className='relative'>
//                 <select
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   className='w-full appearance-none px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:border-[#00c288] bg-white transition-colors cursor-pointer text-slate-700'>
//                   <option value='' disabled>
//                     Select your role
//                   </option>
//                   <option value='Student'>Student</option>
//                   <option value='Teacher'>Teacher</option>
//                   <option value='Admin'>Admin</option>
//                 </select>
//                 <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400'>
//                   <ChevronDown size={18} />
//                 </div>
//               </div>
//             </div>

//             {/* Sign in Button */}
//             <button
//               type='submit'
//               className='w-full bg-[#00c288] hover:bg-[#00b377] text-white font-bold py-3.5 rounded-md transition-all active:scale-[0.98] shadow-sm'>
//               Sign in
//             </button>
//           </form>

//           <div className='mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4'>
//             <Link
//               to='/signup'
//               className='w-full text-center border border-slate-200 py-3 rounded-md hover:bg-slate-50 transition-colors font-bold text-slate-700'>
//               Create an account
//             </Link>
//             <button className='text-slate-400 text-sm hover:underline'>Forgot your password?</button>
//           </div>
//         </div>
//       </div>

//       <div className='mt-8 text-slate-400 text-xs pb-8'>© 2026 ObserveX. All rights reserved.</div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect } from "react";
import { AlertCircle, ChevronDown, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import logo from "../assets/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isHoveringForm, setIsHoveringForm] = useState(false);

  const navigate = useNavigate();

  // --- Eye Tracking & Leaning Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const eyeX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const eyeY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (showPassword) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  useEffect(() => {
    if (!showPassword) {
      mouseX.set(-15);
      mouseY.set(-5);
    } else if (!isHoveringForm) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }, [showPassword, isHoveringForm, mouseX, mouseY]);

  const leanRotation = !showPassword ? -12 : isHoveringForm ? 8 : 0;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError("Please enter your details and select your role.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5142/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const result = await response.json();
      if (response.ok) {
        setError("");
        localStorage.setItem("userRole", result.role);
        localStorage.setItem("userEmail", result.email);
        navigate("/dashboard");
      } else {
        setError(result.message || "Invalid login credentials.");
      }
    } catch (err) {
      setError("Cannot connect to server.");
    }
  };

  const handleInputChange = (setter, value) => {
    setter(value);
    if (error) setError("");
  };

  return (
    <div className='flex min-h-screen bg-slate-50 font-sans overflow-hidden' onMouseMove={handleMouseMove}>
      {/* LEFT SIDE: Animated Illustration */}
      <div className='hidden lg:flex w-1/2 bg-[#e8edf5] items-center justify-center relative'>
        <div className='relative w-[450px] h-[450px] flex items-end justify-center'>
          {/* PURPLE CHARACTER */}
          <motion.div
            animate={{
              rotate: leanRotation,
              y: [0, -10, 0],
              x: error ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            style={{ transformOrigin: "bottom center" }}
            transition={{
              rotate: { type: "spring" },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            className='absolute bottom-32 left-12 w-28 h-64 bg-[#747bff] rounded-t-[60px] z-10 flex flex-col items-center pt-12 shadow-sm'>
            <EyePair x={eyeX} y={eyeY} isSquinting={!showPassword} isError={!!error} />
            <motion.div
              animate={{ height: error ? 4 : showPassword ? 6 : 18, width: error ? 20 : 3, borderRadius: "100px" }}
              className='bg-black/20 mt-6'
            />
          </motion.div>

          {/* BLACK CHARACTER */}
          <motion.div
            animate={{
              rotate: leanRotation,
              y: showPassword ? [-15, -25, -15] : [0, -10, 0],
              x: error ? [0, -8, 8, -8, 8, 0] : 0,
            }}
            style={{ transformOrigin: "bottom center" }}
            transition={{
              rotate: { type: "spring" },
              y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.3 },
            }}
            className='absolute bottom-20 left-48 w-24 h-52 bg-[#0f172a] rounded-t-[40px] z-20 flex flex-col items-center pt-10 shadow-sm'>
            <EyePair x={eyeX} y={eyeY} color='white' isSquinting={!showPassword} isError={!!error} />
            <motion.div
              animate={{ scale: error ? 1.5 : showPassword ? 1 : 0, opacity: showPassword || error ? 1 : 0 }}
              className='w-2 h-2 bg-white/20 rounded-full mt-4'
            />
          </motion.div>

          {/* ORANGE CHARACTER - Fixed Growth on Error */}
          <motion.div
            animate={{
              rotate: leanRotation * 0.5,
              y: [0, -8, 0],
              // scale is 1 when error exists to prevent it from getting bigger/pulsing
              scale: error ? 1 : [1, 1.02, 1],
              x: error ? [0, -15, 15, -15, 15, 0] : 0,
            }}
            style={{ transformOrigin: "bottom center" }}
            transition={{
              rotate: { type: "spring" },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              // Pulsing scale only repeats when there is no error
              scale: error ? { duration: 0.2 } : { repeat: Infinity, duration: 2 },
            }}
            className='absolute bottom-0 left-0 w-64 h-52 bg-[#f97316] rounded-t-[130px] z-30 flex flex-col items-center pt-24 shadow-sm'>
            <EyePair x={eyeX} y={eyeY} scale={0.8} isSquinting={!showPassword} isError={!!error} />
            <motion.div
              animate={{
                // Reduced width expansion on error
                width: error ? 24 : showPassword ? 24 : 16,
                height: error ? 8 : showPassword ? 10 : 2,
                borderRadius: error ? "100px 100px 0 0" : showPassword ? "0 0 100px 100px" : "4px",
                backgroundColor: error ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)",
              }}
              className='mt-4'
            />
          </motion.div>

          {/* YELLOW CHARACTER */}
          <motion.div
            animate={{
              rotate: leanRotation,
              y: [0, -12, 0],
              x: error ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            style={{ transformOrigin: "bottom center" }}
            transition={{
              rotate: { type: "spring" },
              y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.1 },
            }}
            className='absolute bottom-0 left-72 w-40 h-40 bg-[#facc15] rounded-t-[80px] rounded-r-[80px] z-30 flex flex-col items-center pt-14 shadow-sm'>
            <EyePair x={eyeX} y={eyeY} isSquinting={!showPassword} isError={!!error} />
            <motion.div
              animate={{ width: error ? 8 : 14, x: error ? 2 : showPassword ? 0 : -3 }}
              className='h-[3px] bg-black/20 rounded-full mt-4'
            />
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-white'>
        <div className='flex items-center gap-3 mb-10'>
          <img src={logo} alt='ObserveX Logo' className='w-10 h-10 object-contain' />
          <span className='text-2xl font-bold text-[#1e293b] tracking-tight uppercase'>observeX</span>
        </div>

        <div
          onMouseEnter={() => setIsHoveringForm(true)}
          onMouseLeave={() => setIsHoveringForm(false)}
          className={`w-full max-w-[480px] bg-white rounded-lg border shadow-xl p-12 transition-all ${error ? "border-red-200 shadow-red-100" : "border-slate-100"}`}>
          <h1 className='text-3xl font-bold text-[#1e293b] mb-2'>Sign in</h1>
          <p className='text-slate-400 mb-8 font-medium'>Welcome back! Please enter your details.</p>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6 flex items-center gap-2 p-3 rounded-md bg-red-50 text-red-600 text-sm border border-red-100'>
              <AlertCircle size={16} />
              <span className='font-semibold'>{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold text-[#1e293b] mb-2'>Enter your email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => handleInputChange(setEmail, e.target.value)}
                placeholder='name@gmail.com'
                className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00c288] outline-none transition-all focus:bg-white bg-slate-50 font-medium'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-[#1e293b] mb-2'>Enter password</label>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => handleInputChange(setPassword, e.target.value)}
                  placeholder='••••••••'
                  className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00c288] outline-none transition-all focus:bg-white bg-slate-50 font-medium'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-3.5 text-slate-300 hover:text-[#00c288] transition-colors'>
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <div className='relative'>
              <label className='block text-sm font-semibold text-[#1e293b] mb-2'>Sign in as</label>
              <div className='relative'>
                <select
                  value={role}
                  onChange={(e) => handleInputChange(setRole, e.target.value)}
                  className='w-full appearance-none px-4 py-3 rounded-lg border border-slate-200 focus:border-[#00c288] outline-none bg-slate-50 cursor-pointer text-slate-500 font-bold'>
                  <option value='' disabled>
                    Select your role
                  </option>
                  <option value='Student'>Student</option>
                  <option value='Teacher'>Teacher</option>
                  <option value='Admin'>Admin</option>
                </select>
                <ChevronDown size={18} className='absolute right-4 top-3.5 text-slate-300 pointer-events-none' />
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-[#00c288] hover:bg-[#00b07c] text-white font-bold py-4 rounded-lg transition-all active:scale-[0.99] shadow-md text-lg'>
              Sign in
            </button>
          </form>

          <div className='mt-8 pt-1 border-t border-slate-50'>
            <Link
              to='/signup'
              className='block w-full text-center border border-slate-200 py-3 rounded-lg font-bold text-[#1e293b] hover:bg-slate-50 transition-colors'>
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EYE COMPONENT ---
const EyePair = ({ x, y, scale = 1, isSquinting = false, isError = false }) => (
  <div className='flex gap-4' style={{ transform: `scale(${scale})` }}>
    {[1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{
          height: isError ? 22 : isSquinting ? 4 : 18,
          width: 18,
          borderRadius: isSquinting && !isError ? "2px" : "50%",
          scale: isError ? [1, 1.2, 1] : 1,
        }}
        className='bg-white flex items-center justify-center relative overflow-hidden shadow-sm'>
        <motion.div
          style={{ x, y }}
          animate={{ opacity: isSquinting && !isError ? 0 : 1 }}
          className={`w-2.5 h-2.5 bg-black rounded-full`}
        />
      </motion.div>
    ))}
  </div>
);

export default LoginPage;
