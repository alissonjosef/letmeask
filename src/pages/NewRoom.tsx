import { Link } from 'react-router-dom';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';


import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { useAuth } from '../hooks/useAuth';
//  import { AuthContext } from '../contexts/AuthContext';


export function NewRoom() {
  //const { user } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e resposta" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                         />
                         <Button type="submit">
                             Criar sala
                         </Button>
                    </form>
                         <p>
                             Quer entrar em uma salar ja existente? <Link to="/">Crique aqui</Link>
                             
                             </p>
                </div>
            </main>
        </div>
    )
}