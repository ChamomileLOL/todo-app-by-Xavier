import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-extrabold text-indigo-700 drop-shadow-lg animate-fade-in-down flex justify-center items-center gap-2">
        <Sparkles className="text-yellow-400 animate-pulse" />
        My To-Do List
      </h1>
      <p className="text-gray-500 mt-1 italic">Stay organized, stay focused. 💡</p>
    </div>
  );
};

export default Header;
