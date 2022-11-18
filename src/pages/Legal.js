import React from 'react'
import NavBar from '../components/NavBar'
import TopBlur from '../components/TopBlur'
import BottomBlur from '../components/BottomBlur'

export default function Home() {
  return (
    <div className="isolate bg-purple-100 overflow-y-hidden min-h-screen">
      <TopBlur />
      <NavBar />
      <main>
        <div className="relative mx-auto max-w-5xl text-purple-900 h-screen">
            {/* <h1 className="text-5xl pb-4 font-bold text-purple-900 text-center tracking-tight"> */}
            <h1 className="text-5xl pb-8 pt-8 font-bold text-center">
              legal stuff
            </h1>
            <h1 className="text-3xl text-center pb-4">website disclaimer</h1>
            <p className="pb-4">The information provided by can my cat eat xyz? ("we", "us", or "our") on canmycateat.xyz (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
            <h1 className="text-3xl text-center pb-4">external links disclaimer</h1>
            <p className="pb-4">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or origination from third parties or links to websites and features in banners or other asvertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
            <h1 className="text-3xl text-center pb-4">professional disclaimer</h1>
            <p>The Site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical/health advice.
            THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>

            <BottomBlur />
        </div>
      </main>
    </div>
  )
  
}