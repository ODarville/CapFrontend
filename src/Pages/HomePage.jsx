function HomePage() {
    return (
        <div>
                <button className="HomePageButtons" id="bp-button"><img src="./Images/pizzapizza.jp" id="bp-btn" alt="Brothers Pizza" onClick={() => window.location.href = "https://brotherspizzeriahouston.com/"} /></button>
                {/* <img src="/Images/bp_logo.png" className="bp-logo" alt="" /> */}
                <button className="HomePageButtons" id="sm-button"><img src="./Images/donutdonut.jp" id="sm-btn" alt="Southern Maid" onClick={() => window.location.href = "https://www.southernmaiddonuts.com/index.html"} /></button>
                {/* <img src="/Images/output.png" className='sm-logo' alt="" /> */}
                <button className="HomePageButtons" id="sb-button"><img src="./Images/burritoburrito.jp" id="sb-btn" alt="Senor Burrito" onClick={() => window.location.href = "https://www.google.com/search?q=senior+burrito&rlz=1C1SQJL_enUS909US909&oq=se&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTINCAMQABiRAhiABBiKBTINCAQQABiRAhiABBiKBTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBBzk1M2owajeoAgiwAgHxBRyxJmW5WzzM8QUcsSZluVs8zA&sourceid=chrome&ie=UTF-8&lqi=Cg5zZW5pb3IgYnVycml0b0i_wf3sj62AgAhaFhAAEAEYASIOc2VuaW9yIGJ1cnJpdG-SARJtZXhpY2FuX3Jlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUmZaMkp4VDFOQkVBRaoBVgoJL20vMDFqM3pyEAEqEiIOc2VuaW9yIGJ1cnJpdG8oADIfEAEiGzR9D1G5WKh3FhSL_PUBs4M3TqBYm0m24nLTaTISEAIiDnNlbmlvciBidXJyaXRvugEJCgdidXJyaXRv4AEA-gEECG8QDw#rlimm=9404784157272079345"} /></button>
                {/* <img src="/Images/output (4).png" className="sb-logo" alt="" /> */}
        </div>
    );
} 

export default HomePage