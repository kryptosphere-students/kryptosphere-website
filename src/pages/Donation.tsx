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
            
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-4">{t('donation.amount')}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {predefinedAmounts.map((value) => (
                  <button
                    key={value}
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg font-medium transition-all duration-300 ${
                      amount === value && !customAmount
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {value}€
                  </button>
                ))}
              </div>
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="number"
                  placeholder={t('donation.customAmount')}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount('');
                  }}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-4">{t('donation.paymentMethod')}</label>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 ${
                    paymentMethod === 'card'
                      ? 'border-blue-500 bg-blue-500/10 text-white'
                      : 'border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  {t('donation.card')}
                </button>
                <button
                  onClick={() => setPaymentMethod('crypto')}
                  className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 ${
                    paymentMethod === 'crypto'
                      ? 'border-blue-500 bg-blue-500/10 text-white'
                      : 'border-slate-600 bg-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <Wallet className="w-5 h-5" />
                  {t('donation.crypto')}
                </button>
              </div>
            </div>

            {/* Donation Info */}
            <div className="bg-slate-700/50 rounded-lg p-6 mb-8">
              <h3 className="text-white font-medium mb-2">{t('donation.summary')}</h3>
              <div className="flex justify-between items-center text-slate-300">
                <span>{t('donation.amountLabel')}</span>
                <span className="text-xl font-bold text-blue-400">
                  {customAmount || amount}€
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                {t('donation.info')}
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              {t('donation.finalize')}
            </button>

            <p className="text-sm text-slate-400 text-center mt-4">
              {t('donation.security')}
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{t('donation.transparency')}</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            {t('donation.transparencyText')}
          </p>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 border border-slate-600">
            {t('donation.reports')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;
