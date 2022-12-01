import { useEffect, useState } from 'react';
import styles from './FeedbackForm.module.css';

export default function FeedbackForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setShowSuccess(true);
  };

  useEffect(() => {
    let id = setTimeout(() => {
      setShowSuccess(false);
    }, 10000);
    return () => clearTimeout(id);
  }, [showSuccess]);

  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="feedback"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="feedback" />
      <p className={styles.hidden}>
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Name</label>
      <input id="name" className={styles['form-field']} type="text" name="name" required />

      <label htmlFor="age">Age</label>
      <input id="age" className={styles['form-field']} type="number" name="age" required />

      <div className={styles.flexColumn}>
        <label style={{ marginBottom: 12 }} htmlFor="sex">
          Sex
        </label>
        <select className={styles.select} id="sex" name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>

      <br />

      <label htmlFor="phonenumber">Phone Number</label>
      <input
        id="phonenumber"
        className={styles['form-field']}
        type="tel"
        name="phonenumber"
        placeholder="98--------"
        pattern="[0-9]{10}"
        required
      />

      <button className={styles.button} type="submit">
        Submit
      </button>

      {showSuccess && (
        <div className={styles.successToast}>
          Thank you for sending details. We will contact you soon!
        </div>
      )}
    </form>
  );
}
