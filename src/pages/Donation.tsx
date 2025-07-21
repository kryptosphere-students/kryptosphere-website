import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Euro, Users, Target, CreditCard, Wallet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '../components/ui/dialog';

const TOR_URL = "http://2l4udju3groh7qbt2lvy7iy3x3rg2n5ajmikzqttdcomd2lyxjb3c6ad.onion/apps/2R7Z45MZWJUfxtVdF55Yz1eJx9Sn/pos";

const Donation = () => {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [openTorModal, setOpenTorModal] = useState(false);
  const { t } = useLanguage();

  const predefinedAmounts = ['25', '50', '100', '250'];

  const impactAreas = [
    {
      icon: Users,
      title: t('donation.training'),
      description: t('donation.trainingDesc')
    },
    {
      icon: Target,
      title: t('donation.development'),
      description: t('donation.developmentDesc')
    },
    {
      icon: Heart,
      title: t('donation.events'),
      description: t('donation.eventsDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <Heart className="w-4 h-4" />
            {t('donation.supportTag')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('donation.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {t('donation.subtitle')}
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            {t('donation.impact')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 text-center">
                <area.icon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-slate-300 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('donation.choose')}</h2>
            </div>
            
            {/* IFRAME Don en euros */}
            <div className="w-full h-[800px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50">
              <iframe
                src="https://kryptosphere.s2.yapla.com/fr/donation--6304"
                width="100%"
                height="100%"
                loading="lazy"
                style={{
                  border: 'none',
                  borderRadius: '1rem'
                }}
                title="Donation Kryptosphere"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton pour donation en Bitcoin */}


      {/* Don en cryptomonnaies */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{t('donation.transparencyCRYPTO')}</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            {t('donation.transparencyTextCRYPTO')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bitcoin Lightning Network */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/20 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8 hover:border-orange-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {/* Bitcoin Logo */}
                <svg className="w-8 h-8" viewBox="0.004 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/>
                  <path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#ffffff"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bitcoin Lightning</h3>
              <Dialog open={openTorModal} onOpenChange={setOpenTorModal}>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setOpenTorModal(true)}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
                  >
                    {t('donation.reportsBTC').split('\n')[0]}
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t('donation.btcModal.title')}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    <pre className="whitespace-pre-wrap break-all overflow-x-auto text-sm mb-4">{t('donation.btcModal.body')}</pre>
                  </DialogDescription>
                  <div className="flex justify-end gap-2 mt-4">
                    <DialogClose asChild>
                      <button
                        className="px-4 py-2 rounded bg-slate-200 text-slate-900 font-semibold hover:bg-slate-300 transition"
                      >
                        {t('donation.btcModal.close')}
                      </button>
                    </DialogClose>
                    <a
                      href={TOR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
                    >
                      {t('donation.btcModal.button')}
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Ethereum */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {/* Ethereum Logo */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="16" cy="16" r="16" fill="#627EEA"/>
                    <g fill="#FFF" fillRule="nonzero">
                      <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/>
                      <path d="M16.498 4L9 16.22l7.498-3.35z"/>
                      <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/>
                      <path d="M16.498 27.995v-6.028L9 17.616z"/>
                      <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/>
                      <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ethereum</h3>
              <a
                href="https://etherscan.io/address/0x1dd9214e10bbc4d4bbeeb01951cc5e73ef9d66c6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                {t('donation.reportsETH')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin node */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{t('donation.transparencyBTC')}</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            {t('donation.transparencyTextBTC')}
          </p>
          
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 max-w-2xl mx-auto hover:border-green-400/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              {/* Server/Node Icon */}
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 1h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 8h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zm0 8h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Bitcoin Node</h3>
            <a
              href="https://amboss.space/node/035ecfa18f08c079ba58a410859aada06062ac31ca60585bfc878ad60e6a490448?section=General"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
            >
              {t('donation.reportsBTCNODE')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;
