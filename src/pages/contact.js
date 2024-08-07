import React from "react"
import Layout from "../components/Layout"
import * as styles from "./contact.module.scss"

export default function Contact() {
  const handleSubmit = event => {
    event.preventDefault() // Prevent the default form submission behavior
    // Add your form submission logic here
  }

  return (
    <Layout>
      <div className={styles.contact_form}>
        <h2>Lets get Connected and Socialize</h2>

        <form
          className={styles.contact_form__fields}
          name="contact v1"
          method="POST"
          data-netlify="true" // This attribute tells Netlify to handle form submissions
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} // Provide the function to handle form submission
        >
          <input type="hidden" name="form-name" value="contact v1" />{" "}
          {/* Specify the form name */}
          <div className={styles.hidden}>
            {/* Hidden field for Netlify honeypot */}
            <label>
              Don't fill this out:
              <input name="bot-field" />
            </label>
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
