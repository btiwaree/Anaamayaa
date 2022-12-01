import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="age">Age</label>
        <input id="age" className={styles['form-field']} type="number" name="age" required />

        <div className={styles.flexColumn}>
          <label style={{ marginBottom: 12}} htmlFor="sex">Sex</label>
          <select className={styles.select} id="sex" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <br />

        <label htmlFor="phonenumber">Phone Number</label>
        <input id="phonenumber" className={styles['form-field']} type="tel" name="phonenumber" placeholder='98--------' pattern="[0-9]{10}" required />

        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
