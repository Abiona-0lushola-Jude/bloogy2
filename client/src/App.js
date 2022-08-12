import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import AllBlog from "./components/BlogFiles/AllBlog";
import CreateBlog from "./components/BlogFiles/CreateBlog";
import News from './components/NewsFiles/News'
import Todo from './components/todo/Todo'
import EditBlog from "./components/BlogFiles/EditBlog";
import ReadMoreBlog from "./components/BlogFiles/ReadMoreBlog";

function App() {
  return (
    <div className="App">
      <Navbar className="nav" />
      <Routes className="routes">
        <Route path="/" element={<AllBlog />} />
        <Route path="bloggy/:blogId" element={<ReadMoreBlog />} />
        <Route path="bloggy/:blogId/edit" element={<EditBlog />} />
        <Route path="bloggy/create" element={<CreateBlog />} />
        <Route path="/bloggy/news" element={<News />} />
        <Route path='bloggy/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
