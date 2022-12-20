import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_zs101jo",
        "service_zs101jo",
        e.target,
        "GgSBwHEkeS92cLT_"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>联系我们</h2>
                {/* <p>请填写下表给我们发送邮件，我们将尽快与您联系。</p> */}
                <div className="contact-info">
                  <div className="contact-item">
                    <p>
                      <span>
                        <i className="fa fa-map-marker"></i> 地址
                      </span>
                      {props.data ? props.data.address : "loading"}
                    </p>
                  </div>
                  <div className="contact-item">
                    <p>
                      <span>
                        <i className="fa fa-envelope-o"></i> 邮箱
                      </span>{" "}
                      {props.data ? props.data.email : "loading"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} 上海翎刻网络科技.</p>
        </div>
      </div>
    </div>
  );
};
