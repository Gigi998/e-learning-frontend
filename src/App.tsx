import { Routes, Route } from 'react-router-dom';
import Book from './pages/Book';
import Students from './pages/Students';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthCheck from './components/AuthCheck';
import AddNewStudent from './pages/AddNewStudent';
import IssueBookForm from './components/App/Book/IssueBookForm/IssueBookForm';
import ErrorPage from './pages/Error';
import SingleStudent from './components/App/Students/SingleStudentCard/SingleStudentCard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public */}
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        {/* Protected routes */}
        <Route element={<AuthCheck />}>
          <Route path="/" element={<Book />} />
        </Route>
        <Route element={<AuthCheck />}>
          <Route path="/issueBook" element={<IssueBookForm />} />
        </Route>
        <Route element={<AuthCheck />}>
          <Route path="/students" element={<Students />}>
            <Route path=":id" element={<SingleStudent />} />
          </Route>
        </Route>
        <Route element={<AuthCheck />}>
          <Route path="/addStudent" element={<AddNewStudent />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
