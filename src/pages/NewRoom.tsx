//import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'

export function NewRoom() {
    //const { user } = useAuth()
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração representando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência ao-vivo</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>)
}