import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiHeart, FiCheckCircle, FiUsers } from 'react-icons/fi'

const values = [
    {
        icon: <FiUsers size={32} />,
        title: 'Persönlich',
        description: 'Jeder Mensch ist einzigartig. Wir nehmen uns Zeit, Ihre Bedürfnisse und Wünsche wirklich zu verstehen.',
    },
    {
        icon: <FiCheckCircle size={32} />,
        title: 'Verlässlich',
        description: 'Sie können sich auf uns verlassen – immer pünktlich, immer da, wenn Sie uns brauchen.',
    },
    {
        icon: <FiHeart size={32} />,
        title: 'Menschlich',
        description: 'Wir begegnen jedem Menschen mit Würde, Respekt und echtem Einfühlungsvermögen.',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.18, ease: 'easeOut' }
    })
}

export default function Values() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="values" id="werte">
            <div className="container">
                <motion.div
                    className="values__header"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">Unsere Werte</span>
                    <h2 className="section-title">Was uns antreibt</h2>
                </motion.div>

                <div className="values__grid">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            className="values__card"
                            custom={i}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(44,95,74,0.15)' }}
                        >
                            <div className="values__icon">{v.icon}</div>
                            <h3>{v.title}</h3>
                            <p>{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
