import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
                <strong>Criar salas de Perguntas&amp;Respostas em tempo real</strong>
                <p>Tire as duvidas dos seus ouvintes</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="HaveQuestion" />
                    <h2>Criar uma nova sala</h2>
                    <form >
                        <input type="text" placeholder="Apelido da Sala"/>
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Deseja entrar em uma sala existente? <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>
    )
}