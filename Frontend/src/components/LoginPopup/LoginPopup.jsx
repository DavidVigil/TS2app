import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [estadoActual, setEstadoActual] = useState('Registrarse');

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{estadoActual}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Cerrar"
          />
        </div>
        <div className="login-popup-inputs">
          {estadoActual === 'Registrarse' && (
            <input type="text" placeholder='Nombre' />
          )}
          <input type="email" placeholder='Correo electrónico' />
          <input type="password" placeholder='Contraseña' />
        </div>
        <button>
          {estadoActual === 'Iniciar sesión' ? 'Iniciar sesión' : 'Crear una cuenta'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" id="termsCheckbox" />
          <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
        </div>
        {estadoActual === 'Iniciar sesión' ? (
          <p>
            ¿Crear una cuenta nueva?{' '}
            <span onClick={() => setEstadoActual('Registrarse')}>Haz clic aquí</span>
          </p>
        ) : (
          <p>
            ¿Ya tienes una cuenta?{' '}
            <span onClick={() => setEstadoActual('Iniciar sesión')}>Inicia sesión aquí</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
