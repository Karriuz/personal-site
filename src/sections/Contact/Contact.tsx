import styles from './Contact.module.scss'
import { ContactForm } from './ContactForm';
import { ContactLink } from './ContactLink';
import LiIcon from '../../assets/LiIcon.png'
import mail from '../../assets/mail.svg'
import GithubIcon from '../../assets/GitHubIcon.png'
import { EmailPopup } from './EmailPopup';

export const Contact = () => {
    return (
        <section className={styles.contact} id='Contact'>
            <div style={{ minHeight: '100%' }}>
                <h2>Contact</h2>
                <p>Please feel free to contact me.<br /> You can write about whatever you want!</p>
                <div className={styles.linkContainer}>
                    <ContactLink link='https://github.com/Karriuz/' imgSrc={GithubIcon} alt='Github logo' />
                    <ContactLink link='#' imgSrc={LiIcon} alt='LinkedIn Logo' />
                    <EmailPopup />
                </div>
            </div>
            <ContactForm />
        </section>
    );
}