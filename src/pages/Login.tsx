import { useState } from "react";
import styles from './Login.module.css';
import fondo_login from '../assets/fondo_login.jpg'
// Agregamos el tipo para las props
interface LoginProps {
    onLogin: () => void;
}

export function Login({ onLogin }: LoginProps): JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Por favor llena todos los campos antes de continuar");
            return; // Detiene la ejecución
        }

        console.log('Email:', email);
        console.log('Password:', password);

        // Llamamos a la función que cambia la pantalla
        onLogin();
    };

    return (
        <div className={styles.container} style={{backgroundImage: `url(${fondo_login})`}}>
            <div className={styles.card}>
                <h1 className={styles.title}>Iniciar Sesión</h1>

                <form>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email:</label>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Password:</label>
                        <input
                            className={styles.input}
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" onClick={handleSubmit} className={styles.button}>
                        Iniciar Sesión
                    </button>
                    <button className={styles.button} onClick={handleSubmit}>
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}

