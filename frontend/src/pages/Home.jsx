import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ArrowRight, CheckCircle2, Code, TrendingUp, Users, Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Menu, X, Globe, ShoppingCart, Search, Share2, FileText, Wrench, Target, Lightbulb, BarChart } from 'lucide-react';
import { mockServices, mockProcess, mockWhyChoose, mockPortfolio, mockTestimonials } from '../data/mock';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage for demo
    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    inquiries.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
  <>
  <div className="min-h-screen bg-black">
    {/* Header */}
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src="/n1.png"
              alt="NarayanGrowth Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-white tracking-wide">
              Narayan<span className="text-orange-500">Growth</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white">Services</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-gray-300 hover:text-white">Portfolio</button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-300 hover:text-white">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white">Contact</button>
            <Button onClick={() => scrollToSection("contact")} className="bg-orange-600 hover:bg-orange-700 text-white">
              Get Started
            </Button>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-900 rounded-md">About</button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-900 rounded-md">Services</button>
            <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-900 rounded-md">Portfolio</button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-900 rounded-md">Testimonials</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-900 rounded-md">Contact</button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>

    {/* HERO SECTION (NOW INSIDE SAME PARENT) */}
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Grow Your Business with Smart Digital Marketing & High-Performance Websites
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your online presence with data-driven marketing strategies and cutting-edge web solutions that deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection("contact")} className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => scrollToSection("services")} className="border border-gray-600 text-white hover:bg-gray-900 text-lg px-8 py-6">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</>


      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Narayan Growthwave</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a results-driven digital marketing and web development company dedicated to helping businesses achieve sustainable growth. With expertise in modern technologies and strategic marketing approaches, we craft solutions that drive real business outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-white">Growth Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Every strategy we implement is designed to drive measurable business growth and long-term success.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-white">Innovation Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">We leverage the latest technologies and marketing trends to keep you ahead of the competition.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-white">Client Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Your success is our priority. We work closely with you to understand and achieve your business goals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Narayan Growthwave</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Experience the difference of working with a truly committed partner</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mockWhyChoose.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">A proven process that delivers results every time</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {mockProcess.map((step, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900 border border-gray-800 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg font-semibold text-white">{step.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-14 pr-4 pb-4">
                    <p className="text-gray-400">{step.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Work</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Successful projects that drove real business results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPortfolio.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-gray-700 group-hover:to-gray-800 transition-colors duration-300">
                  <div className="text-center">
                    {project.icon}
                    <p className="text-gray-400 font-medium mt-2">{project.category}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Real feedback from businesses we've helped grow</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-base text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-400">{testimonial.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 italic">"{testimonial.feedback}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-700 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Build Your Digital Growth Story</h2>
          <p className="text-xl text-orange-100 mb-8">Ready to take your business to the next level? Let's discuss how we can help you achieve your goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-white hover:bg-gray-100 text-orange-600 text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Let's discuss how we can help grow your business</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@narayangrowthwave.com</p>
                    <p className="text-gray-600">support@narayangrowthwave.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                    <p className="text-gray-600">Mumbai, Maharashtra</p>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                    <Facebook className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                    <Twitter className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                    <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 group">
                    <Instagram className="w-5 h-5 text-slate-600 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Narayan Growthwave</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering businesses with innovative digital marketing strategies and high-performance web solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Website Development</li>
                <li>E-commerce Solutions</li>
                <li>SEO Optimization</li>
                <li>Social Media Marketing</li>
                <li>Google Ads</li>
                <li>Content Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex gap-3 mb-4">
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">info@narayangrowthwave.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Narayan Growthwave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
