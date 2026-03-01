import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiHeart, FiStar, FiAward } from 'react-icons/fi'

const highlights = [
    { icon: <FiHeart size={20} />, text: 'Aus Leidenschaft zur Pflege' },
    { icon: <FiStar size={20} />, text: 'Langjährige Erfahrung' },
    { icon: <FiAward size={20} />, text: 'Professionell & zertifiziert' },
]

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="about" id="ueber-uns">
            <div className="container">
                <div className="about__inner" ref={ref}>
                    {/* Image column */}
                    <motion.div
                        className="about__image-col"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="about__image-wrap">
                            <img src={`${import.meta.env.BASE_URL}hero.png`} alt="Susanne Sauter – Herzenssache" className="about__image" />
                            <div className="about__badge">
                                <FiHeart size={22} />
                                <span>Herzenssache seit 2024</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text column */}
                    <motion.div
                        className="about__text-col"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                    >
                        <span className="section-label">Über uns</span>
                        <h2 className="section-title">Susanne Sauter</h2>
                        <p className="about__intro">
                            Unter dem Namen <strong>Herzenssache</strong> biete ich als selbständige Pflegerin in
                            Waggendorf und Umgebung einfühlsame und professionelle Betreuung für pflegebedürftige
                            Menschen an.
                        </p>
                        <p className="about__text">
                            Für mich ist Pflege mehr als ein Beruf – es ist eine Berufung. Mit viel Geduld,
                            Einfühlungsvermögen und fachlichem Wissen begleite ich Menschen in ihrer vertrauten
                            Umgebung. Mein Ziel ist es, dass sich jede Person, die ich betreue, wohl, sicher und
                            respektiert fühlt.
                        </p>

                        <div className="about__highlights">
                            {highlights.map((h) => (
                                <div key={h.text} className="about__highlight">
                                    <span className="about__highlight-icon">{h.icon}</span>
                                    <span>{h.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
