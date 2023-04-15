import OGImg from "assets/Images/og.jpg";
import { Navbar } from "components/SharedComponent";
import { Helmet } from "react-helmet";
import Wrapper from "./Styles/PrivacyPolicy.js";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />{" "}
      <Wrapper>
        <Helmet>
          <title> Privacy Policy </title>
          <meta property="og:image" content={OGImg.src} />
          <meta
            property="og:title"
            content="Privacy Policy - Panther Protocol"
          />
          <meta
            property="og:description"
            content="This privacy policy will explain how Panther Ventures Limited, our organization, uses the personal data we collect from you when you use our website."
          />
        </Helmet>
        <div className="container">
          <section id="privacy-policy" className="privacy-policy">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-9 text-center">
                  <h3>Panther Privacy Policy</h3>
                  <p>
                    This privacy policy will explain how Panther Ventures
                    Limited, our organization, uses the personal data we collect
                    from you when you use our website.
                  </p>

                  <div className="qna-block">
                    <h4> What data do we collect? </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io collects the following data:{" "}
                    </p>
                    <ul>
                      <li> Anonymized website usage data </li>
                    </ul>
                  </div>

                  <div className="qna-block">
                    <h4> How do we collect your data? </h4>
                    <p className="qna-block-desc">
                      {" "}
                      You directly provide PantherProtocol.io with most of the
                      data we collect. We collect data and process data when
                      you:{" "}
                    </p>
                    <ul>
                      <li>
                        {" "}
                        Register online or place an order for any of our
                        products or services.{" "}
                      </li>
                      <li>
                        {" "}
                        Voluntarily complete a customer survey or provide
                        feedback on any of our message boards or via email.{" "}
                      </li>
                      <li>
                        {" "}
                        Use or view our website via your browser’s cookies.{" "}
                      </li>
                    </ul>

                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io may also receive your data indirectly
                      from the following sources:{" "}
                    </p>
                    <ul>
                      <li> Google Analytics </li>
                    </ul>
                  </div>

                  <div className="qna-block">
                    <h4> How will we use your data? </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io collects your data so that we can:{" "}
                    </p>
                    <ul>
                      <li> Process your order and manage your account. </li>
                      <li>
                        {" "}
                        Email you with information and news about
                        pantherprotocol.io or about Panther Protocol.{" "}
                      </li>
                    </ul>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io does not share or sell your data with
                      any other third party.{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> How do we store your data? </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io securely stores your data. The
                      strictest security policies and technologies are used to
                      keep your data secure.{" "}
                    </p>
                    <br />
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io securely stores your data. The
                      strictest security policies and technologies are used to
                      keep your data secure.{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> Marketing </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io may send you information related to
                      Panther Protocol and its business.{" "}
                    </p>
                    <br />
                    <p className="qna-block-desc">
                      {" "}
                      You have the right at any time to stop PantherProtocol.io
                      from contacting you for any purposes. To do so, please
                      contact us via email at the address provided.{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> What are your data protection rights? </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io would like to make sure you are fully
                      aware of all of your data protection rights. Every user is
                      entitled to the following:{" "}
                    </p>
                    <ul>
                      <li>
                        {" "}
                        The right to access – You have the right to request
                        PantherProtocol.io for copies of your personal data. We
                        may charge you a small fee for this service.{" "}
                      </li>
                      <li>
                        {" "}
                        The right to rectification – You have the right to
                        request that PantherProtocol.io correct any information
                        you believe is inaccurate. You also have the right to
                        request pantherprotocol.io to complete the information
                        you believe is incomplete.{" "}
                      </li>
                      <li>
                        {" "}
                        The right to erasure – You have the right to request
                        that PantherProtocol.io erase your personal data, under
                        certain conditions.{" "}
                      </li>
                      <li>
                        {" "}
                        The right to restrict processing – You have the right to
                        request that PantherProtocol.io restrict the processing
                        of your personal data, under certain conditions.{" "}
                      </li>
                      <li>
                        {" "}
                        The right to object to processing – You have the right
                        to object to PantherProtocol.io’s processing of your
                        personal data, under certain conditions.{" "}
                      </li>
                      <li>
                        {" "}
                        The right to data portability – You have the right to
                        request that PantherProtocol.io transfer the data that
                        we have collected to another organization, or directly
                        to you, under certain conditions.{" "}
                      </li>
                    </ul>
                    <p className="qna-block-desc">
                      {" "}
                      If you make a request, we have one month to respond to
                      you. If you would like to exercise any of these rights,
                      please contact us at our email: info@pantherprotocol.io{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> Cookies </h4>
                    <p className="qna-block-desc">
                      {" "}
                      Cookies are text files placed on your computer to collect
                      standard Internet log information and visitor behavior
                      information. When you visit our websites, we may collect
                      information from you automatically through cookies or
                      similar technology{" "}
                    </p>
                    <br />
                    <p className="qna-block-desc">
                      {" "}
                      For further information, visit allaboutcookies.org{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> How do we use cookies? </h4>
                    <p className="qna-block-desc">
                      PantherProtocol.io uses cookies in a range of ways to
                      improve your experience on our website, including:{" "}
                    </p>
                    <ul>
                      <li> Keeping you signed in </li>
                      <li> Understanding how you use our website </li>
                    </ul>
                  </div>

                  <div className="qna-block">
                    <h4> What types of cookies do we use? </h4>
                    <p className="qna-block-desc">
                      {" "}
                      There are a number of different types of cookies, however,
                      our website uses:{" "}
                    </p>
                    <ul>
                      <li>
                        {" "}
                        Functionality – PantherProtocol.io uses these cookies so
                        that we recognize you on our website and remember your
                        previously selected preferences. These could include
                        what language you prefer and location you are in. A mix
                        of first-party and third-party cookies are used.{" "}
                      </li>
                      <li>
                        {" "}
                        Advertising – PantherProtocol.io uses these cookies to
                        collect information about your visit to our website, the
                        content you viewed, the links you followed and
                        information about your browser, device, and your IP
                        address.{" "}
                      </li>
                    </ul>
                  </div>

                  <div className="qna-block">
                    <h4> How to manage cookies </h4>
                    <p className="qna-block-desc">
                      {" "}
                      You can set your browser not to accept cookies, and the
                      above website tells you how to remove cookies from your
                      browser. However, in a few cases, some of our website
                      features may not function as a result.{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> Privacy policies of other websites </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io website contains links to other
                      websites. Our privacy policy applies only to our website,
                      so if you click on a link to another website, you should
                      read their privacy policy.{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> Changes to our privacy policy </h4>
                    <p className="qna-block-desc">
                      {" "}
                      PantherProtocol.io keeps its privacy policy under regular
                      review and places any updates on this web page. This
                      privacy policy was last updated on 15 January 2020.{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> How to contact us </h4>
                    <p className="qna-block-desc">
                      {" "}
                      If you have any questions about PantherProtocol.io privacy
                      policy, the data we hold on you, or you would like to
                      exercise one of your data protection rights, please email
                      us at: info@pantherprotocol.io{" "}
                    </p>
                  </div>

                  <div className="qna-block">
                    <h4> How to contact the appropriate authority </h4>
                    <p className="qna-block-desc">
                      {" "}
                      Should you wish to report a complaint or if you feel that
                      PantherProtocol.io has not addressed your concern in a
                      satisfactory manner, you may contact the Information
                      Commissioner’s Office.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default PrivacyPolicy;
