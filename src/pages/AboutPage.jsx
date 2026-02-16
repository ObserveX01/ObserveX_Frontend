import React from "react";
import Navbar from "../components/Navbar";
import { Calendar, MapPin, Users, FileText, CheckCircle2, Clock, Building2, Mail, Award, PenLine } from "lucide-react";

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-white font-sans overflow-x-hidden flex flex-col'>
      {/* Dark Header Wrapper */}
      <div className='bg-[#004242]'>
        <Navbar />
      </div>

      {/* --- SECTION 1: HERO & STATS --- */}
      <section className='relative bg-[#e8e0ff] pt-24 pb-36 px-6 overflow-hidden'>
        <div className='absolute top-10 -left-20 w-80 h-24 bg-[#dcd0ff] rounded-full rotate-[35deg] opacity-60'></div>
        <div className='absolute bottom-10 -right-20 w-96 h-28 bg-[#dcd0ff] rounded-full rotate-[35deg] opacity-60'></div>

        <div className='max-w-5xl mx-auto text-center relative z-10'>
          <h1 className='text-4xl md:text-6xl font-extrabold text-[#004242] mb-8 leading-tight tracking-tight'>
            A few words about who we are and <br /> what drives us to act
          </h1>
          <p className='text-slate-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed'>
            ObserveX is a groundbreaking, innovative online platform for competencies evaluations. But enough of the
            bragging, let the numbers speak for themselves:
          </p>

          <div className='bg-white rounded-3xl shadow-2xl p-6 md:p-10 flex flex-wrap justify-around items-center gap-8 border border-slate-100'>
            <StatBox icon={<Calendar size={28} className='text-[#00c288]' />} label='established in' value='2026' />
            <div className='h-12 w-px bg-slate-100 hidden md:block'></div>
            <StatBox icon={<MapPin size={28} className='text-[#00c288]' />} label='users from' value='190+ countries' />
            <div className='h-12 w-px bg-slate-100 hidden md:block'></div>
            <StatBox
              icon={<Users size={28} className='text-[#00c288]' />}
              value='2.5M+ users'
              label='every month'
              reverse
            />
            <div className='h-12 w-px bg-slate-100 hidden md:block'></div>
            <StatBox
              icon={<FileText size={28} className='text-[#00c288]' />}
              value='200K tests'
              label='every day'
              reverse
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: MISSION --- */}
      <section className='max-w-7xl mx-auto py-28 px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='grid grid-cols-2 gap-6 h-[550px]'>
            <div className='rounded-3xl overflow-hidden shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
                alt='Our Mission'
                className='w-full h-full object-cover'
              />
            </div>

            <div className='flex flex-col gap-6'>
              <div className='bg-[#e9f0f7] rounded-3xl p-6 flex items-center justify-center flex-1 relative'>
                <div className='bg-white p-6 rounded-2xl shadow-xl border border-slate-50 w-full'>
                  <MissionRow
                    icon={<PenLine size={18} className='text-purple-500' />}
                    val='80/20'
                    desc='Passed / Failed'
                  />
                  <MissionRow
                    icon={<Clock size={18} className='text-purple-500' />}
                    val="3:23'"
                    desc='Average completion time'
                  />
                  <MissionRow
                    icon={<CheckCircle2 size={18} className='text-purple-500' />}
                    val='40'
                    desc='Completed the test'
                  />
                </div>
              </div>

              <div className='bg-[#e1f9ef] rounded-3xl p-8 h-48 flex flex-col justify-center gap-4'>
                <div className='h-6 w-3/4 bg-[#00c288]/30 rounded-full self-start'></div>
                <div className='h-6 w-full bg-[#00c288]/50 rounded-full'></div>
                <div className='h-6 w-2/3 bg-[#00c288]/30 rounded-full self-end'></div>
              </div>
            </div>
          </div>

          <div className='lg:pl-6'>
            <h2 className='text-5xl font-bold text-[#004242] mb-8'>Our mission</h2>
            <div className='space-y-8 text-slate-600 text-lg leading-relaxed'>
              <p>
                We created a revolutionary online knowledge and competencies assessment solution. It empowers thousands
                of organizations worldwide to grow by allowing them to get a broader picture and draw better conclusions
                with cutting-edge data analysis algorithms. But most of all, it allows them to fulfill their missions:
                to educate or do business without distractions.
              </p>
              <p>
                ObserveX is a catalyst. Mix it with your enterprise and it will accelerate your growth, save you time,
                and money. It will let you concentrate on your work by automating what used to be a laborious and
                complex process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: QUOTE BANNER --- */}
      <section className='bg-[#004242] py-32 px-6 relative overflow-hidden text-center'>
        <div className='absolute left-[-10%] bottom-0 w-96 h-24 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-full rotate-[-15deg]'></div>
        <div className='absolute right-[-10%] top-0 w-96 h-24 bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full rotate-[-15deg]'></div>

        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-10 leading-snug'>
            We make skills and knowledge assessments objective, insightful and actionable.
          </h2>
          <p className='text-[#00c288] font-bold text-xl uppercase tracking-[0.3em]'>ObserveX Team</p>
        </div>
      </section>

      {/* --- SECTION 4: AWARDS & PARTNERS --- */}
      <section className='max-w-7xl mx-auto py-28 px-6'>
        <h2 className='text-4xl font-bold text-[#004242] mb-16'>Our awards & partnerships</h2>
        <div className='grid md:grid-cols-2 gap-12'>
          <AwardCard
            logo='https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
            title='Microsoft ONE 2026 award'
            tag='Category: New Star: ISV & StartUp'
            desc="We collaborate with Microsoft, the world's leading cloud computing provider. The duo allows users to unleash the full potential of our platform."
          />
          <AwardCard
            logo='https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
            title='AWS Technology Partner'
            tag='Cloud & Data Security'
            desc='By leveraging Amazon Web Services, we utilize highly scalable cloud computing and database solutions to provide a seamless testing experience for organizations globally.'
          />
        </div>
      </section>

      {/* --- SECTION 5: DETAILS --- */}
      <section className='max-w-7xl mx-auto pb-32 px-6'>
        <div className='bg-white rounded-3xl border border-slate-100 shadow-xl p-12 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full -mr-24 -mt-24'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-slate-50 rounded-full -ml-16 -mb-16'></div>

          <h2 className='text-3xl font-bold text-[#004242] text-center mb-16'>Company details</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10'>
            <FooterItem icon={<Building2 className='text-[#004242]' />} text='ObserveX' />
            <FooterItem
              icon={<MapPin className='text-[#004242]' />}
              text='Plot 3/B, Road 111, Gulshan-2, Dhaka-1212, Bangladesh'
            />
            <FooterItem icon={<Mail className='text-[#004242]' />} text='support@observex.com' />
            <FooterItem icon={<Award className='text-[#004242]' />} text='Tax ID: PL9731017273' />
          </div>
        </div>
      </section>

      {/* --- FINAL FOOTER (FULL BLACK TEXT) --- */}
      <footer className='max-w-4xl mx-auto px-6 py-12 text-center text-black font-medium text-sm'>
        &copy; 2026 ObserveX. All rights reserved.
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const StatBox = ({ icon, label, value, reverse = false }) => (
  <div className='flex items-center gap-5'>
    <div className='bg-slate-50 p-5 rounded-2xl shadow-sm border border-slate-100'>{icon}</div>
    <div className='flex flex-col'>
      <span
        className={`text-sm font-semibold uppercase tracking-wider ${reverse ? "text-slate-800 text-lg font-bold mb-[-4px]" : "text-slate-400"}`}>
        {reverse ? value : label}
      </span>
      <span className={`text-2xl font-black text-slate-800 ${reverse ? "text-sm text-slate-400 font-semibold" : ""}`}>
        {reverse ? label : value}
      </span>
    </div>
  </div>
);

const MissionRow = ({ icon, val, desc }) => (
  <div className='flex items-start gap-4 mb-6 last:mb-0'>
    <div className='bg-purple-50 p-2 rounded-lg mt-1'>{icon}</div>
    <div>
      <p className='text-xl font-bold text-slate-800 leading-none'>{val}</p>
      <p className='text-xs font-semibold text-slate-400 mt-2 uppercase tracking-tighter'>{desc}</p>
    </div>
  </div>
);

const AwardCard = ({ logo, title, tag, desc }) => (
  <div className='bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 relative group'>
    <div className='absolute -top-10 left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 w-24 h-24 flex items-center justify-center group-hover:-translate-y-2 transition-transform'>
      <img src={logo} alt='brand' className='w-full grayscale group-hover:grayscale-0 transition-all' />
    </div>
    <div className='mt-8'>
      <h3 className='text-3xl font-bold text-[#004242] mb-3'>{title}</h3>
      {tag && <p className='text-[#00c288] font-bold text-sm mb-6 uppercase tracking-widest'>{tag}</p>}
      <p className='text-slate-500 leading-relaxed text-lg'>{desc}</p>
    </div>
  </div>
);

const FooterItem = ({ icon, text }) => (
  <div className='flex flex-col items-center text-center lg:items-start lg:text-left gap-4'>
    <div className='bg-slate-50 p-3 rounded-full'>{icon}</div>
    <p className='text-sm text-slate-600 font-bold leading-relaxed'>{text}</p>
  </div>
);

export default AboutPage;
