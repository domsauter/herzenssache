import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const places = [
    'Waggendorf', 'Pettenbach', 'Kirchham', 'Vöcklabruck',
    'Schwanenstadt', 'Roitham', 'Attnang-Puchheim', 'und Umgebung'
]

export default function Area() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="area" id="einzugsgebiet">
            <div className="container">
                <motion.div
                    className="area__inner"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="area__text">
                        <span className="section-label">Einzugsgebiet</span>
                        <h2 className="section-title">Für Sie da in<br />Waggendorf & Umgebung</h2>
                        <p className="section-subtitle">
                            Als mobile Pflegerin komme ich direkt zu Ihnen nach Hause.
                            Ich bin in Waggendorf und den umliegenden Gemeinden für Sie im Einsatz.
                        </p>
                        <div className="area__places">
                            {places.map((p, i) => (
                                <motion.span
                                    key={p}
                                    className="area__place-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                                >
                                    <FiMapPin size={14} />
                                    {p}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="area__map-placeholder"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="area__map-circle">
                            <FiMapPin size={48} />
                            <span>Waggendorf</span>
                            <span className="area__map-sub">& Umgebung</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
