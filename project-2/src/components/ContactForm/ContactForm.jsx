import { MdMessage, MdEmail } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";
import Button from "../Button/Button";
import styles from "../ContactForm/ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("")

  const onViaChat = () => {
    alert("Via Chat Successfully");
  };
  const onViaCall = () => {
    alert("Via Call Successfully");
  };
  const onViaEmail = () => {
    alert("Via Email Successfully");
  };  


  const onSubmit = (ev) => {
    ev.preventDefault();
    
    setName(ev.target[0].value);
    setEmail(ev.target[1].value);
    setText(ev.target[2].value);

    // email = ev.target[1].value;
    // text = ev.target[2].value;

    
    
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaChat}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCall}
            text="VIA CALL"
            icon={<PiPhoneCallDuotone fontSize="24px" />}
          />
        </div>
        <Button
          onClick={onViaEmail}
          isOutlined={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}> 
          <div className={styles.form_Controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_Controller}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_Controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div className={styles.Submit_btn}>
            <Button text="Submit" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="./src/assets/Service 24_7-pana 1.svg" alt="service Image" />
      </div>
    </section>
  );
};

export default ContactForm;
