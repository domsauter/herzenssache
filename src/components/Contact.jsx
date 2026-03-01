import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPhone, FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Anfrage von ${form.name} – Herzenssache Website`)
        const body = encodeURIComponent(`Hallo Susanne,\n\n${form.message}\n\nMit freundlichen Grüßen,\n${form.name}`)
        window.location.href = `mailto:herzenssache.waggendorf@gmail.com?subject=${subject}&body=${body}`
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }

    return (
        <section className="contact" id="kontakt">
            <div className="container">
                <motion.div
                    className="contact__inner"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Info side */}
                    <div className="contact__info">
                        <span className="section-label">Kontakt</span>
                        <h2 className="section-title">Sprechen wir miteinander</h2>
                        <p className="contact__intro">
                            Haben Sie Fragen oder möchten Sie einen Kennenlerntermin vereinbaren?
                            Ich freue mich auf Ihre Nachricht!
                        </p>

                        <div className="contact__details">
                            <a href="tel:+4367761422408" className="contact__detail" id="contact-phone">
                                <div className="contact__detail-icon">
                                    <FiPhone size={22} />
                                </div>
                                <div>
                                    <span className="contact__detail-label">Telefon</span>
                                    <span className="contact__detail-value">+43 677 61422408</span>
                                </div>
                            </a>

                            <a href="mailto:herzenssache.waggendorf@gmail.com" className="contact__detail" id="contact-email">
                                <div className="contact__detail-icon">
                                    <FiMail size={22} />
                                </div>
                                <div>
                                    <span className="contact__detail-label">E-Mail</span>
                                    <span className="contact__detail-value">herzenssache.waggendorf@gmail.com</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form side */}
                    <motion.div
                        className="contact__form-wrap"
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                            <h3>Schnellnachricht senden</h3>
                            <div className="contact__field">
                                <label htmlFor="contact-name">
                                    <FiUser size={16} />
                                    Ihr Name
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Vor- und Nachname"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                <label htmlFor="contact-message">
                                    <FiMessageSquare size={16} />
                                    Ihre Nachricht
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Wie kann ich Ihnen helfen?"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className={`btn-primary contact__submit ${sent ? 'contact__submit--sent' : ''}`} id="contact-submit">
                                <FiSend size={18} />
                                {sent ? 'E-Mail wird geöffnet…' : 'Nachricht senden'}
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
