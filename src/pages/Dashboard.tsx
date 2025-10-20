
import styles from './Dashboard.module.css';
import logo from '../assets/gato-negro.png';

import { ItemCard } from '../components/ItemCard';

export function Dashboard(): JSX.Element {


    return (
        <div>
            {/* Header */}
            <div className={styles.upper_div}>
                <img src={logo} className={styles.logo} alt="Logo" />
                <span className={styles.title}>Mi Dashboard</span>
            </div>

            {/* Contenedor de ItemCards */}
            <div className={styles.dashboard_container}>
                <ItemCard title="Salchipapa" content="No sé" />
                <ItemCard title="Hamburguesa" content="Con queso" />
                <ItemCard title="Pizza" content="Con extra queso" />
            </div>
        </div>
    );
}
