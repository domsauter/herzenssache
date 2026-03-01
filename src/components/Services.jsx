import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiHome, FiUsers, FiShoppingBag, FiMapPin, FiSun, FiActivity } from 'react-icons/fi'

const services = [
    {
        icon: <FiHome size={28} />,
        title: 'Pflege zu Hause',
        description: 'Körperpflege, Medikamentengabe und pflegerische Unterstützung direkt bei Ihnen zuhause.',
    },
    {
        icon: <FiUsers size={28} />,
        title: 'Alltagsbegleitung',
        description: 'Gesellschaft, Gespräche und Unterstützung im Alltag – damit Sie sich nicht allein fühlen.',
    },
    {
        icon: <FiShoppingBag size={28} />,
        title: 'Haushaltshilfe',
        description: 'Unterstützung bei Einkäufen, Kochen, Waschen und anderen alltäglichen Aufgaben.',
    },
    {
        icon: <FiMapPin size={28} />,
        title: 'Begleitung zu Terminen',
        description: 'Begleitung zu Arzt, Behörden oder Freizeitaktivitäten – sicher und zuverlässig.',
    },
    {
        icon: <FiSun size={28} />,
        title: 'Demenzbetreuung',
        description: 'Einfühlsame Betreuung für Menschen mit Demenz und deren Angehörige.',
    },
    {
        icon: <FiActivity size={28} />,
        title: 'Aktivierung & Beschäftigung',
        description: 'Sinnvolle Beschäftigung, Gedächtnisübungen und Bewegung für mehr Lebensfreude.',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
    })
}

export default function Services() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="services" id="leistungen">
            <div className="services__bg-shape" />
            <div className="container">
                <motion.div
                    className="services__header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">Was wir anbieten</span>
                    <h2 className="section-title">Unsere Leistungen</h2>
                    <p className="section-subtitle">
                        Wir begleiten pflegebedürftige Menschen und ihre Familien mit maßgeschneiderten, liebevollen Angeboten.
                    </p>
                </motion.div>

                <div className="services__grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            className="services__card"
                            custom={i}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
                        >
                            <div className="services__card-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
