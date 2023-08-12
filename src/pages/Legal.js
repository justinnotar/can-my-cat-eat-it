import React from "react";
import NavBar from "../components/NavBar";
import TopBlur from "../components/TopBlur";
import BottomBlur from "../components/BottomBlur";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-y-auto bg-purple-100">
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-5xl text-purple-900">
          <TopBlur />
          <h1 className="pb-8 pt-10 text-center text-5xl font-bold">
            legal stuff
          </h1>
          <p className="p-8 pt-0">
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
            <BottomBlur />
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
          </p>
        </div>
      </main>
    </div>
  );
}
