import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';
import '../styles/auth.scss';

export function Home() {
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
                    <button className="create-room">
                        <img src={googleIcon} alt="" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form >
                        <input type="text" placeholder="Digite o código da sala"/>
                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}