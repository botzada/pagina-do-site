"use client"

import { useState } from 'react'
import { Bot, Globe, Smartphone, Settings, Mail, Phone, User, MessageSquare, ArrowRight, Check, Star } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    {
      icon: Bot,
      title: "Agentes de IA",
      description: "Assistentes virtuais inteligentes que automatizam processos e melhoram a experiência do cliente",
      features: ["Chatbots personalizados", "Automação de atendimento", "Integração com sistemas", "Análise de dados"]
    },
    {
      icon: Globe,
      title: "Sites Profissionais",
      description: "Websites modernos e responsivos que convertem visitantes em clientes",
      features: ["Design responsivo", "SEO otimizado", "Performance alta", "Manutenção inclusa"]
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com foco na experiência do usuário",
      features: ["Interface intuitiva", "Multiplataforma", "Push notifications", "Analytics integrado"]
    },
    {
      icon: Settings,
      title: "Sistemas Internos",
      description: "Soluções SaaS customizadas para otimizar processos internos da sua empresa",
      features: ["Dashboard personalizado", "Relatórios em tempo real", "Integração de APIs", "Segurança avançada"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white/10 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4aae95]/10 via-[#4aae95]/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-[#4aae95]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#4aae95]/20 to-[#3d9b82]/20 border border-[#4aae95]/30 text-[#4aae95] text-sm font-medium mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Soluções de IA e Tecnologia
            </div>
            
            {/* Headline otimizada com hierarquia visual clara */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
              Transforme seu{' '}
              <span className="bg-gradient-to-r from-[#4aae95] via-[#5bc4a7] to-[#3d9b82] bg-clip-text text-transparent">
                Negócio com IA
              </span>
            </h1>
            
            {/* Subheadline otimizada - menor no mobile */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Desenvolvemos agentes de IA, plataformas SaaS e soluções digitais que impulsionam o crescimento da sua empresa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-[#4aae95] via-[#5bc4a7] to-[#3d9b82] hover:from-[#3d9b82] hover:via-[#4aae95] hover:to-[#5bc4a7] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4aae95]/25 flex items-center"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#4aae95]/50 hover:border-[#4aae95] text-gray-300 hover:text-[#4aae95] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-[#4aae95]/5 backdrop-blur-sm"
              >
                Ver Serviços
              </button>
            </div>
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 sm:py-32 bg-slate-900">
        {/* Smooth transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 via-slate-900/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia e inteligência artificial para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-3xl border border-[#4aae95]/20 hover:border-[#4aae95]/50 hover:shadow-2xl hover:shadow-[#4aae95]/10 transition-all duration-500 hover:scale-105"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4aae95]/5 via-transparent to-[#3d9b82]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-[#4aae95] via-[#5bc4a7] to-[#3d9b82] p-4 rounded-2xl shadow-lg shadow-[#4aae95]/25">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-[#4aae95] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className="bg-gradient-to-r from-[#4aae95] to-[#3d9b82] p-1 rounded-full mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#4aae95] via-[#5bc4a7] to-[#3d9b82] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-32 bg-black">
        {/* Smooth transition from previous section */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/30 to-transparent"></div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tem um projeto em mente? Conte-nos sobre sua ideia e vamos transformá-la em realidade com nossas soluções de IA e tecnologia.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-[#4aae95]/10 p-6 sm:p-8 border border-[#4aae95]/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-[#4aae95]/20 to-[#3d9b82]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#4aae95]/30">
                  <Check className="w-10 h-10 text-[#4aae95]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                <p className="text-gray-300">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#4aae95] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm text-sm"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#4aae95] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#4aae95] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm text-sm"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#4aae95] focus:border-transparent transition-all duration-300 text-white backdrop-blur-sm text-sm hover:bg-slate-800/70 focus:bg-slate-800/70"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="agentes-ia">Agentes de IA</option>
                      <option value="sites">Sites Profissionais</option>
                      <option value="aplicativos">Aplicativos Mobile</option>
                      <option value="sistemas">Sistemas Internos</option>
                      <option value="consultoria">Consultoria</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Descreva seu projeto *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#4aae95] focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400 backdrop-blur-sm text-sm"
                      placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#4aae95] via-[#5bc4a7] to-[#3d9b82] hover:from-[#3d9b82] hover:via-[#4aae95] hover:to-[#5bc4a7] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4aae95]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Enviar Mensagem
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Smooth transition to footer */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#4aae95]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#4aae95] to-[#3d9b82] bg-clip-text text-transparent">
              Lasy AI
            </h3>
            <p className="text-gray-400 mb-6">
              Transformando negócios com inteligência artificial e tecnologia de ponta
            </p>
            <div className="flex justify-center space-x-6">
              <Mail className="w-6 h-6 text-[#4aae95] hover:text-[#5bc4a7] cursor-pointer transition-colors duration-300" />
              <Phone className="w-6 h-6 text-[#4aae95] hover:text-[#5bc4a7] cursor-pointer transition-colors duration-300" />
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 Lasy AI. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}