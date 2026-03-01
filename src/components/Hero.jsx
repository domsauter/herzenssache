import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiArrowDown, FiPhone } from 'react-icons/fi'

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__bg">
                <img src={`${import.meta.env.BASE_URL}hero.png`} alt="Pflegende Hände in österreichischer Natur" className="hero__img" />
                <div className="hero__overlay" />
            </div>

            <div className="hero__content container">
                <motion.div
                    className="hero__text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <motion.span
                        className="hero__eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Mobile Pflege · Waggendorf & Umgebung
                    </motion.span>

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Herzenssache
                    </motion.h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Individuelle Betreuung mit Herz und Kompetenz.
                        <br />
                        <em>Persönlich. Verlässlich. Menschlich.</em>
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link to="kontakt" smooth duration={700} offset={-80} className="btn-primary hero__btn-main">
                            <FiPhone size={18} />
                            Jetzt kontaktieren
                        </Link>
                        <Link to="leistungen" smooth duration={700} offset={-80} className="btn-outline hero__btn-secondary">
                            Unsere Leistungen
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero__scroll"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
                <Link to="leistungen" smooth duration={700} offset={-80}>
                    <FiArrowDown size={24} />
                </Link>
            </motion.div>
        </section>
    )
}
