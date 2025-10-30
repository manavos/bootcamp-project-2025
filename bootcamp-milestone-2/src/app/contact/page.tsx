export default function Contact(){
    return (
    <main>
      <h1 className="page-title"><strong>Contact me!</strong></h1>

      <form id="contact-form" className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          
        />

        <input
          className="button"
          type="submit"
          id="submit"
          name="submitbutton"
          value="Submit"
        />
      </form>
    </main>
  );



}