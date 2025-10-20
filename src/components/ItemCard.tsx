import styles from './ItemCard.module.css';

interface ItemCardProps {
    title?: string;
    content?: string;
}

export function ItemCard({ title = "Item", content = "Descripción del item" }: ItemCardProps): JSX.Element {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
        </div>
    );
}