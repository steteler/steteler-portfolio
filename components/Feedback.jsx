import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '@styles/Feedback.module.css';

export default function Feedback() {
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const templateParams = {
      from_name: 'FEEDBACK [STETELER PORTFOLIO]',
      email: 'joaovictorkikuti@gmail.com',
      message,
    };

    try {
      emailjs.send('service_vqr73wo', 'template_uixvwr4', templateParams, 'WKZXiJiq5X6l6QgXs');
      setMessage('');
      setOpen('');
      window.alert('obrigado pelo feedback ;)');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.feedback}>
      <button
        type="button"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
        className={`${styles.feedback__btn} ${isOpen && styles.open}`}
      >
        {isOpen ? 'X' : '★ ENVIAR FEEDBACK ★'}

      </button>

      {
        isOpen && (
        <form
          onSubmit={handleSubmit}
          className={styles.feedback__form}
        >
          <label htmlFor="feedback-txt">
            Como eu posso melhorar? ❤️
            <br />
            <textarea
              rows={4}
              id="feedback-txt"
              className={styles.feedback__form__txt}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>

          <button
            type="submit"
            className={styles.feedback__form__btn}
          >
            ENVIAR

          </button>
        </form>
        )
      }
    </div>
  );
}
