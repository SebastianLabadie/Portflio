import React from "react";
import { Control, Errors, Form } from "react-redux-form";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";
const required = (val) => val && val.length;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const FormStyled = styled(motion.div)`
  .form-group {
    padding: 0 20px;
    line-height: 1.33;
    width: 100%;
    .form-control {
      width: 100%;
      padding: 0 20px;
      margin: 16px 0;
      outline: none;
      font-size: 17px;
      color: #7c7c7c;
      border: 1px solid #dadada;
      background-color: #131414;
      border-radius: 10px;
      font-weight: 700;
      line-height: 1.33;
      font-family: "Inter", sans-serif;
    }
    .input {
      height: 60px;
    }
    .textArea {
      padding-top: 10px;
      height: 160px;
    }
  }

  @media screen and (max-width: 920px) {
    .form-group {
      .form-control {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 773px) {
    .form-group {
      .form-control {
        font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 697px) {
    .form-group {
      .form-control {
        font-size: 14px;
      }
    }
  }
`;

const FormCustom = () => {
  let data = {
    service_id: "default_service",
    template_id: "template_WyUXuOTf",
    user_id: "user_xnFCyYKQzoftkdB7K6nAr",
    template_params: {
      email_html: "",
      message_html: "",
    },
  };
  const handleSendEmail = (val) => {
    data.template_params.email_html = val.email;
    data.template_params.message_html = val.message;
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  const pageVariants = {
    inY: {
      opacity: 1,
      y: 0,
    },
    outY: {
      opacity: 0,
      y: "+50vh",
    },
  };

  return (
    <FormStyled>
      <Form model="formState" onSubmit={(val) => handleSendEmail(val)}>
        <motion.div
          initial={pageVariants.outY}
          animate={pageVariants.inY}
          exit={pageVariants.outY}
          transition={{ duration: 1 }}
          className="form-group"
        >
          <Control.text
            model=".email"
            id="email"
            name="email"
            placeholder="Your E-mail"
            className="form-control input"
          />
        </motion.div>
        <motion.div
          initial={pageVariants.outY}
          animate={pageVariants.inY}
          exit={pageVariants.outY}
          transition={{ duration: 1 }}
          className="form-group"
        >
          <div>
            <Control.textarea
              model=".message"
              id="message"
              name="message"
              placeholder="Say something..."
              rows="12"
              className="form-control textArea"
            />
          </div>
        </motion.div>
        <div className="form-group">
          <div>
            <Button>Send Message</Button>
          </div>
        </div>
      </Form>
    </FormStyled>
  );
};

export default FormCustom;
