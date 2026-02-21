import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import HelpCenter from "./pages/HelpCenter";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CreateQuestionPage from "./pages/CreateQuestionPage";
import QuestionTypesPage from "./pages/QuestionTypesPage";
import MyQuestionsPage from "./pages/MyQuestionsPage";
import EditorPage from "./pages/EditorPage";
import CourseQuestionsPage from "./pages/CourseQuestionsPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import ExamPage from "./pages/ExamPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='/help' element={<HelpCenter />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/create-question' element={<CreateQuestionPage />} />
        <Route path='/question-types' element={<QuestionTypesPage />} />
        <Route path='/my-questions' element={<MyQuestionsPage />} />
        <Route path='/create-multiple-choice' element={<EditorPage />} />
        <Route path='/course-questions' element={<CourseQuestionsPage />} />
        <Route path='/course/:courseName' element={<CourseDetailsPage />} />
        <Route path='/exam-preview/:courseName' element={<ExamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
