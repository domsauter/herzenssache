import { FiHeart, FiPhone, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <FiHeart />
                            <span>Herzenssache</span>
                        </div>
                        <p>Mobile Pflege in Waggendorf und Umgebung.</p>
                    </div>

                    <div className="footer__links">
                        <span className="footer__links-title">Navigation</span>
                        {['leistungen', 'ueber-uns', 'einzugsgebiet', 'kontakt'].map((id) => (
                            <Link key={id} to={id} smooth duration={600} offset={-80} className="footer__link">
                                {id === 'leistungen' ? 'Leistungen'
                                    : id === 'ueber-uns' ? 'Über uns'
                                        : id === 'einzugsgebiet' ? 'Einzugsgebiet'
                                            : 'Kontakt'}
                            </Link>
                        ))}
                    </div>

                    <div className="footer__contact">
                        <span className="footer__links-title">Kontakt</span>
                        <a href="tel:+4367761422408" className="footer__contact-item">
                            <FiPhone size={14} />
                            +43 677 61422408
                        </a>
                        <a href="mailto:herzenssache.waggendorf@gmail.com" className="footer__contact-item">
                            <FiMail size={14} />
                            herzenssache.waggendorf@gmail.com
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        © {new Date().getFullYear()} Herzenssache – Susanne Sauter · Waggendorf
                    </p>
                    <p className="footer__heart">
                        Gemacht mit <FiHeart size={14} style={{ display: 'inline', color: '#4A8C6F' }} /> in Österreich
                    </p>
                </div>
            </div>
        </footer>
    )
}
