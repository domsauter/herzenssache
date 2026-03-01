import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function Impressum({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose} aria-label="Schließen">
                            <FiX size={24} />
                        </button>

                        <div className="impressum-body">
                            <h1>Impressum</h1>
                            <section>
                                <h2>Informationspflicht laut §5 E-Commerce Gesetz und Offenlegungspflicht laut §25 Mediengesetz.</h2>
                                <p><strong>Susanne Sauter</strong><br />
                                    Mobile Pflege – Herzenssache</p>
                                <p>Waggendorf 123 (Beispieladresse - bitte ergänzen)<br />
                                    4655 Vorchdorf (Beispiel - bitte korrigieren)<br />
                                    Österreich</p>
                            </section>

                            <section>
                                <h2>Kontakt</h2>
                                <p>Telefon: +43 677 61422408<br />
                                    E-Mail: herzenssache.waggendorf@gmail.com</p>
                            </section>

                            <section>
                                <h2>Berufsbezeichnung / Unternehmensgegenstand</h2>
                                <p>Personenbetreuung / Mobile Pflege & Hilfe</p>
                            </section>

                            <section>
                                <h2>EU-Streitschlichtung</h2>
                                <p>Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: http://ec.europa.eu/odr. Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.</p>
                            </section>

                            <section>
                                <h2>Haftung für Inhalte dieser Website</h2>
                                <p>Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen.</p>
                            </section>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
