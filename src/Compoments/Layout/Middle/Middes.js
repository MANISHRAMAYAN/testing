import "./Middes.css";
import { MdManageAccounts } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaHeadset } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiPython } from "react-icons/si";



export default function Middes() {
    return (
        <>
            <div className="container-fluid full_main">
                <div className="row first_r" style={{ "margin": "auto" }}>
                    <div className="col-md-6 main_head">
                        <div className="heading_title">
                            <h5 >I'am</h5>
                            <h1>MANISH</h1>
                            <h4>
                                MERN STACK DEVELOPER
                            </h4>
                            <p>Shot what able cold new the see hold. Friendly as an betrayed formerly he. Morning because as to society behaved moments</p>
                            <button className="btn_d">Download cv</button>
                            <button className="btn_con">contact</button>

                        </div>

                    </div>
                    <div className="col-md-6 img_container">
                        <div className="main_image">
                            <img src="/Image/frontImage.png" className="man_img" alt="hello" />
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="cont_icon">
                <div className="exp">
                    <div className="exp_icon">                   
                        <div className="ico">
                            <MdManageAccounts className="gr_icon" />
                        </div >
                        <div className="icon_text">
                            <h3> 1 year job</h3>
                            <p>And one year experience</p>

                        </div>

</div>
                    </div>
                    <div className="exp">
                    <div className="exp_icon">
                       
                        <div className="ico">
                            <FaHeadset className="gr_icon" />
                        </div>
                        <div className="icon_text">
                            <h3> 1 year job</h3>
                            <p>And one year experience</p>

                        </div>
                        </div>

                    </div>
                    <div className="exp">   
                    <div className="exp_icon">
                                       
                        <div className="ico">
                            <GoProjectRoadmap className="gr_icon" />
                        </div>
                        <div className="icon_text">
                            <h3> 1 year job</h3>
                            <p>And one year experience</p>

                        </div>
</div>
                    </div>

                </div>

            </section>
            <section>
                <div className="card_container c">
                    <div className=" card_rows">
                        <div className="card_Section">
                            <div className="card_c">
                                <div className="card_icon">
                                    <SiPython className="cg_icon" />
                                </div>

                            </div>

                            <div className="card_text">
                                <h1>python </h1>
                                <p>
                                    Rror te inal desiga othe fal dveoprer age your adcased men
                                    Mageeef speists
                                </p>

                            </div>

                        </div>
                        <div className="card_Section">
                            <div className="card_c">
                                <div className="card_icon">
                                    <CgWebsite className="cg_icon" />
                                </div>

                            </div>

                            <div className="card_text">
                                <h1>web desgin</h1>
                                <p>
                                    Rror te inal desiga othe fal dveoprer age your adcased men
                                    Mageeef speists
                                </p>

                            </div>

                        </div>
                        <div className="card_Section">
                            <div className="card_c">
                                <div className="card_icon">
                                    <IoIosPhonePortrait className="cg_icon" />
                                </div>

                            </div>

                            <div className="card_text">
                                <h1>App desgin</h1>
                                <p>
                                    Rror te inal desiga othe fal dveoprer age your adcased men
                                    Mageeef speists
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


            </section>
            <sectin>
                <div className="">

                    </div>
            </sectin>
        </>
    )
}