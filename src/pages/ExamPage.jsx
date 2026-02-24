import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  ArrowLeft,
  Send,
  ClipboardList,
  Clock,
  ShieldAlert,
  Video,
  AlertCircle,
  Play,
  CheckCircle,
  Eye,
} from "lucide-react";

const ExamPage = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // NEW STATE: To toggle between Rules and Actual Exam
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5142/api/questions/all")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((q) => q.courseName === decodeURIComponent(courseName));
        setQuestions(filtered);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [courseName]);

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionId });
  };

  const handleSubmitExam = () => {
    alert("Exam Submitted Successfully! Your responses have been recorded.");
    navigate("/dashboard");
  };

  if (loading)
    return <div className='flex justify-center items-center h-screen font-bold'>Initializing ObserveX Proctor...</div>;

  return (
    <div className='flex min-h-screen bg-[#f1f5f9] font-sans'>
      <Sidebar />
      <main className='flex-1 ml-64 p-10'>
        {!isStarted ? (
          /* --- STAGE 1: EXAM RULES & INSTRUCTIONS --- */
          <div className='max-w-4xl mx-auto'>
            <button
              onClick={() => navigate(-1)}
              className='flex items-center gap-2 text-slate-500 hover:text-red-600 mb-8 font-bold'>
              <ArrowLeft size={20} /> Back to Dashboard
            </button>

            <div className='bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden'>
              {/* Rules Header */}
              <div className='bg-red-600 p-8 text-white flex items-center gap-4'>
                <ShieldAlert size={40} />
                <div>
                  <h1 className='text-3xl font-black uppercase tracking-tight'>Official Exam Rules</h1>
                  <p className='opacity-80 font-medium'>Please read carefully before starting the assessment</p>
                </div>
              </div>

              <div className='p-10 space-y-8'>
                {/* Visual Rules Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <RuleItem
                    icon={<Video className='text-red-600' />}
                    title='Video Monitoring'
                    desc='Your camera and microphone will be monitored. Ensure you are in a well-lit, quiet room.'
                  />
                  <RuleItem
                    icon={<Eye className='text-red-600' />}
                    title='Tab Switching'
                    desc='Switching tabs or minimizing the browser will be flagged as cheating and auto-submit the exam.'
                  />
                  <RuleItem
                    icon={<AlertCircle className='text-red-600' />}
                    title='Strict Honesty'
                    desc='ObserveX AI detects suspicious eye movements and external help. Take the exam honestly.'
                  />
                  <RuleItem
                    icon={<CheckCircle className='text-red-600' />}
                    title='Single Submission'
                    desc='You can only submit the exam once. Answers cannot be changed after clicking Finish.'
                  />
                </div>

                <div className='bg-slate-50 p-6 rounded-2xl border border-slate-200'>
                  <h3 className='font-bold text-slate-800 mb-2 flex items-center gap-2'>
                    <ClipboardList size={18} /> Course: {decodeURIComponent(courseName)}
                  </h3>
                  <p className='text-sm text-slate-500 leading-relaxed'>
                    Total Questions: <b>{questions.length}</b> | Time Limit: <b>30 Minutes</b> | Pass Mark: <b>80%</b>
                  </p>
                </div>

                <p className='text-center text-red-600 font-black text-sm uppercase tracking-widest animate-pulse'>
                  System check passed. Monitoring is active.
                </p>

                {/* Start Button */}
                <div className='flex justify-center pt-4'>
                  <button
                    onClick={() => setIsStarted(true)}
                    className='bg-black hover:bg-slate-800 text-white px-20 py-5 rounded-2xl font-black text-xl uppercase tracking-[0.3em] shadow-xl transition-all active:scale-95 flex items-center gap-4'>
                    Start Exam <Play size={24} fill='white' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* --- STAGE 2: ACTIVE EXAM VIEW --- */
          <div className='max-w-5xl mx-auto'>
            {/* Header with Timer and Live Monitor Simulation */}
            <div className='flex justify-between items-center mb-10 sticky top-0 z-30 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100'>
              <div className='flex items-center gap-6'>
                <div>
                  <h1 className='text-xl font-black text-slate-800 uppercase'>{decodeURIComponent(courseName)}</h1>
                  <div className='flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase'>
                    <span className='w-2 h-2 bg-emerald-500 rounded-full animate-ping'></span>
                    Live Proctoring Active
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                {/* Fake Camera Feed Box */}
                <div className='w-24 h-16 bg-slate-900 rounded-lg border-2 border-red-500 flex items-center justify-center relative overflow-hidden'>
                  <Video size={20} className='text-white opacity-40' />
                  <div className='absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full'></div>
                  <span className='absolute bottom-1 left-1 text-[6px] text-white font-bold opacity-50'>REC</span>
                </div>
                <div className='bg-red-600 text-white px-6 py-3 rounded-xl font-black flex items-center gap-3'>
                  <Clock size={20} />
                  <span className='text-lg'>29:58</span>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className='space-y-8 pb-32'>
              {questions.map((q, idx) => (
                <div key={q.id} className='bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100'>
                  <div className='flex items-start gap-4 mb-8'>
                    <span className='bg-slate-100 text-slate-800 w-10 h-10 flex items-center justify-center rounded-xl font-black text-lg shrink-0'>
                      {idx + 1}
                    </span>
                    <h2 className='text-2xl font-bold text-slate-800 leading-tight'>{q.text}</h2>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => handleOptionSelect(q.id, opt.id)}
                        className={`group flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                          selectedAnswers[q.id] === opt.id
                            ? "bg-[#00c288] border-[#00c288] text-white shadow-lg shadow-emerald-100"
                            : "bg-white border-slate-100 text-slate-600 hover:border-slate-300"
                        }`}>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedAnswers[q.id] === opt.id ? "bg-white border-white" : "border-slate-300"
                          }`}>
                          {selectedAnswers[q.id] === opt.id && (
                            <div className='w-3 h-3 bg-[#00c288] rounded-full'></div>
                          )}
                        </div>
                        <span className='font-black text-lg'>{opt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className='flex justify-center pt-10'>
                <button
                  onClick={handleSubmitExam}
                  className='bg-black hover:bg-slate-800 text-white px-24 py-6 rounded-[2.5rem] font-black text-2xl uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-95 flex items-center gap-4'>
                  Submit Final Exam <Send size={28} />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

/* Helper Component for Rules */
const RuleItem = ({ icon, title, desc }) => (
  <div className='flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100'>
    <div className='bg-red-50 p-3 rounded-xl h-fit'>{icon}</div>
    <div>
      <h4 className='font-black text-slate-800 uppercase text-sm mb-1'>{title}</h4>
      <p className='text-xs text-slate-500 leading-relaxed'>{desc}</p>
    </div>
  </div>
);

export default ExamPage;
