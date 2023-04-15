import OGImg from "assets/Images/og.jpg";
import { Navbar } from "components/SharedComponent";
import { Helmet } from "react-helmet";
import Wrapper from "./Styles/EmailDisclaimer.js";

const EmailDisclaimer = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Helmet>
          <title> Email Disclaimer Page </title>
          <meta property="og:image" content={OGImg.src} />
          <meta
            property="og:title"
            content="Email Disclaimer - Panther Protocol"
          />
          <meta
            property="og:description"
            content="This message is intended solely for the addressee and may contain confidential information. If you have received this message in error, please send it back to us, and immediately and permanently delete it."
          />
        </Helmet>
        <div className="container">
          <section id="email-disclaimer" className="email-disclaimer">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-9 text-center">
                  <h3>Panther Email Disclaimer</h3>
                  <p>
                    This message is intended solely for the addressee and may
                    contain confidential information. If you have received this
                    message in error, please send it back to us, and immediately
                    and permanently delete it. Do not use, copy or disclose the
                    information contained in this message or in any attachment.
                    Although we have taken reasonable precautions to ensure no
                    viruses are present in this email, we cannot accept
                    responsibility for any loss or damage sustained as a result
                    of computer viruses and the recipient must ensure that the
                    email (and attachments) are virus free.{" "}
                  </p>
                  <p>
                    For information about how we process data and monitor
                    communications please see our{" "}
                    <a href="privacy-policy">Privacy Policy</a> and for terms of
                    use please see our <a href="#!">Terms of Use Policy.</a>{" "}
                    This communication is for informational purposes only and
                    does not constitute an offer to sell or a solicitation of an
                    offer to purchase any interest or security in our company or
                    any other entity or organisation. No representation is being
                    made that the information presented herein is accurate,
                    current or complete, and such information is at all times
                    subject to change without notice.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default EmailDisclaimer;
