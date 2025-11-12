"use client"

import { useState } from 'react'
import { Bot, Globe, Smartphone, Settings, Mail, ArrowRight, Check, Star, Sparkles, Zap, Shield, Code2 } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

// Inicializar cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

let supabase: ReturnType<typeof createClient> | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      if (!supabase) {
        throw new Error('Supabase não está configurado. Configure as variáveis de ambiente.')
      }

      // Inserir dados no Supabase
      const { data, error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            project_description: formData.project
          }
        ])
        .select()

      if (supabaseError) {
        console.error('Erro do Supabase:', supabaseError)
        throw new Error(supabaseError.message)
      }

      console.log('Dados salvos com sucesso:', data)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', project: '' })
      }, 3000)
    } catch (err) {
      console.error('Erro ao enviar:', err)
      setError(err instanceof Error ? err.message : 'Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Header/Navbar Premium */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Premium */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 p-2.5 rounded-xl">
                  <Code2 className="w-7 h-7 text-slate-950" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  CraftCode
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Premium Solutions</p>
              </div>
            </div>

            {/* Email de Contato */}
            <a 
              href="mailto:craftcode83@gmail.com"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors">craftcode83@gmail.com</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge Premium */}
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Tecnologia de Ponta
              </span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>

            {/* Headline Premium */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                CraftCode
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Transformando Ideias em
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Soluções Digitais Premium
              </span>
            </p>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos agentes de IA, plataformas SaaS e aplicações que elevam seu negócio a outro nível
            </p>

            {/* CTAs Premium */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 px-8 py-4 rounded-xl flex items-center">
                  Iniciar Projeto
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/20 hover:border-emerald-400/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/5 backdrop-blur-sm"
              >
                Explorar Serviços
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Entrega Rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Segurança Total</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Qualidade Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Premium */}
      <section id="services" className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 mb-6">
              <Star className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Nossos Serviços</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Soluções Completas em Tecnologia
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Oferecemos serviços premium de desenvolvimento e inteligência artificial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-lg opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-emerald-400 to-cyan-400 p-3 rounded-xl">
                        <service.icon className="w-6 h-6 text-slate-950" strokeWidth={2.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 rounded-full mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-slate-950" strokeWidth={3} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Premium */}
      <section id="contact" className="relative py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 mb-6">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Contato</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Vamos Conversar?
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Conte-nos sobre seu projeto e transformaremos sua visão em realidade
            </p>
          </div>

          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-lg opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-emerald-400 to-cyan-400 w-20 h-20 rounded-full flex items-center justify-center">
                      <Check className="w-10 h-10 text-slate-950" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-400">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 backdrop-blur-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 backdrop-blur-sm"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 backdrop-blur-sm"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                      Descreva seu Projeto *
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-500 backdrop-blur-sm"
                      placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 py-4 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-950 mr-3"></div>
                          Enviando...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Enviar Mensagem
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Email de contato abaixo do formulário */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-3">Ou entre em contato diretamente:</p>
            <a 
              href="mailto:craftcode83@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">craftcode83@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer className="relative border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Logo Footer */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 p-2 rounded-xl">
                  <Code2 className="w-6 h-6 text-slate-950" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  CraftCode
                </h3>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Transformando negócios com inteligência artificial e tecnologia premium
            </p>
            
            <div className="flex justify-center mb-8">
              <a 
                href="mailto:craftcode83@gmail.com"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">craftcode83@gmail.com</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-gray-500 text-sm">
                © 2025 CraftCode. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
