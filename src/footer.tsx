import React from "react";
import ReactDOM from 'react-dom';
import './footer.css';
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import discord from "./assets/discord.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer-section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>Community</h4>
                        <a href="https://polytechnic.purdue.edu/">
                            <p>Purdue Polytechnic</p>
                        </a>
                        <a href="https://polytechnic.purdue.edu/departments/computer-and-information-technology">
                            <p>Purdue CIT</p>
                        </a>
                        <a href="https://boilerlink.purdue.edu/organization/btap">
                            <p>Purdue Blue Team</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Partners</h4>
                        <a href="https://www.cerias.purdue.edu/">
                            <p>CERIAS</p>
                        </a>
                        <a href="https://www.peraton.com/">
                            <p>Peraton</p>
                        </a>
                        <a href="https://muffinmanhosting.com/">
                            <p>Muffin Man Hosting</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Organization</h4>
                        <a href="../About">
                            <p>About Us</p>
                        </a>
                        <a href="https://boilerlink.purdue.edu/organization/ethicalhackerspurdue">
                            <p>BoilerLink</p>
                        </a>
                        <a href="mailto:tgraewe@purdue.edu">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <a href="https://www.linkedin.com/company/ethical-hackers-of-purdue"><img src={linkedin}/></a>
                            <a href="https://www.instagram.com/ethicalhackerspurdue/"><img src={insta}/></a>
                            <a href="https://discord.com/invite/uDvqUVeG"><img src={discord}/></a>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="sb_footer-below">
                        <div className="sb_footer-copyright">
                            <p>
                                ©2025 <a href="">Ethical Hackers of Purdue.</a> All rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;