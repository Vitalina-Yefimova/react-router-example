import '../index.css';
import { Outlet } from 'react-router-dom'; // Outlet - это компонент, который отображает дочерние элементы текущего маршрута.

export default function About() {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold pt-8'>
        Welcome to the About Page
      </h1>
      <p className='pt-4 text-gray-500 text-2xl'>
        This is an About Page
      </p>
      <Outlet />
    </div>
  );
}