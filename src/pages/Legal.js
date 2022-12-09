import React from "react";
import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import BottomBlur from "../components/BottomBlur";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-y-auto bg-purple-100">
      <TopBlur />
      <BottomBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-5xl text-purple-900">
          {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
          <h1 className="pb-8 pt-10 text-center text-5xl font-bold">
            legal stuff
          </h1>
          {/* <h1 className="text-3xl text-center">website disclaimer</h1>
          <p className="p-4">The information provided by can my cat eat xyz? ("we", "us", or "our") on canmycateat.xyz (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
          <h1 className="text-3xl text-center">external links disclaimer</h1>
          <p className="p-4">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or origination from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
          <h1 className="text-3xl text-center">professional disclaimer</h1>
          <p className="p-4">The Site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical/health advice.
          THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.</p> */}
          <p className="p-8 pt-0">
            {/* Dear valued users,<br></br> */}
            We at{" "}
            <b>
              <i>canmycateat.xyz</i>
            </b>{" "}
            are dedicated to providing you with the most up-to-date and accurate
            advice on cats' diets and feline nutrition. In order to maintain the
            trust and confidence of our customers, we have established the
            following legal policy:
            <br />
            <br />
            <ol className="list-decimal">
              <li>
                All of the information provided on our website is intended for
                general informational purposes only and is not intended to be a
                substitute for professional veterinary advice, diagnosis, or
                treatment.
              </li>
              <li>
                We do not provide any warranties or guarantees with respect to
                the accuracy, completeness, or timeliness of the information
                provided on our website. We recommend that you consult with a
                licensed veterinarian before making any decisions about your
                cat's diet or nutritional needs.
              </li>
              <li>
                We are not responsible for any errors or omissions in the
                information provided on our website, or for any loss or damage
                of any kind arising from the use of our website or the reliance
                on any information contained on it.
              </li>
              <li>
                We reserve the right to change or update the information
                provided on our website at any time without notice.
              </li>
              <li>
                By using our website, you agree to indemnify and hold us
                harmless from any claims, losses, damages, or expenses arising
                from your use of our website or reliance on the information
                provided on it.
              </li>
            </ol>
            <br />
            In addition to the above policies, we also want to make it clear
            that we are not responsible for the accuracy, completeness, or
            timeliness of any information provided by external sources or
            websites that may be linked to or listed on our website. We provide
            these links and listings for your convenience only and do not
            endorse any of the external sources or websites. We recommend that
            you exercise caution and do your own independent research before
            relying on any information provided by external sources or websites.
            We also encourage you to review the privacy policies and terms of
            use of any external websites before using them. We are not
            responsible for the privacy practices or the content of external
            websites, and your use of these websites is at your own risk. By
            using our website, you agree to these terms and acknowledge that you
            are solely responsible for any use of external sources or websites.
            <br />
            <br />
            We appreciate your understanding and support in adhering to these
            policies. If you have any questions or concerns, please do not
            hesitate to contact us.
            {/* Sincerely,
            [Website Name] */}
          </p>
        </div>
      </main>
    </div>
  );
}
