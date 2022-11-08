import styles from './contacts-page.module.scss';

const ContactsPage = () => {
    return (
        <div>
            <h1 className={styles.title}>Contacts</h1>
            <button>Send email</button>
            <p>Phone: +370 000 000 <button>Call</button></p>
        </div>
    
    );
    }
    export default ContactsPage;