import '../index.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

// useNavigate - это хук, который предоставляет функцию для навигации в приложении.
// Этот хук позволяет перенаправлять пользователя на новую страницу без взаимодействия с ним.

export default function NotFoundPage() {
  
  const navigate = useNavigate();
  useEffect(() => { // Редиректится to Home через 3 секунды
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });
  
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-red'>
        404 Not Found
      </h1>
      <p>
        The page you are looking for does not exist.
      </p>
      <p>
        You will be redirected to the homepage in 3 seconds...
      </p>
    </div>
  );
}