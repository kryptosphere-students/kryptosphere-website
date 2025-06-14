import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Euro, Users, Target, CreditCard, Wallet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Donation = () => {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
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
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('donation.choose')}</h2>
            
     {/* IFRAME Don en euros */}
<div className="w-full h-[800px] rounded-2xl overflow-hidden border border-slate-700">
            <iframe
              src="https://kryptosphere.s2.yapla.com/fr/donation--6304"
              width="100%"
              height="100%"
              loading="lazy"
              style={{
                border: 'none',
                borderRadius: '1rem'
              }}
              title="Événements à venir Kryptosphere"
            ></iframe>
          </div>
           
        </div>
         </div>
      </section>


{/* Bouton pour donation en Bitcoin */}

  <div className="flex justify-center mt-8">
  <a
    href="2l4udju3groh7qbt2lvy7iy3x3rg2n5ajmikzqttdcomd2lyxjb3c6ad.onion/apps/2R7Z45MZWJUfxtVdF55Yz1eJx9Sn/pos"
    target="_blank"
    rel="noopener noreferrer"
    title="Bitcoin Lightning Network accepted!"
    className="text-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 border border-slate-600"
  >
    {t('donation.reportsBTC').split('\n').map((line, i) => (
  <span key={i}>
    {line}
    <br />
  </span>
))}
  </a>
</div>

<br>
</br>
<br>
</br>
<br>
</br>

{/* Bouton pour donation en Ethers */}

  <div className="flex justify-center mt-8">
  <a
    href="https://etherscan.io/address/0x1dd9214e10bbc4d4bbeeb01951cc5e73ef9d66c6"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 border border-slate-600"
  >
    {t('donation.reportsETH')}
  </a>
</div>

<br>
</br>
<br>
</br>
<br>
</br>

<br>
</br>
<br>
</br>



      {/* Bitcoin node */}
      <section className="py-16 px-6 border-t border-slate-700/50">
      
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{t('donation.transparencyBTC')}</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            {t('donation.transparencyTextBTC')}
          </p>
<a
  href="https://amboss.space/node/035ecfa18f08c079ba58a410859aada06062ac31ca60585bfc878ad60e6a490448?section=General"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 border border-slate-600"
>
  {t('donation.reportsBTCNODE')}
</a>
        </div>
      </section>




      {/* Transparency Section */}
      <section className="py-16 px-6 border-t border-slate-700/50">
      
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{t('donation.transparency')}</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            {t('donation.transparencyText')}
          </p>
<a
  href="https://www.pappers.fr/recherche?q=KRYPTOSPHERE"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 border border-slate-600"
>
  {t('donation.reports')}
</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;
