
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, Euro, Users, Target, CreditCard, Wallet } from 'lucide-react';

const Donation = () => {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const predefinedAmounts = ['25', '50', '100', '250'];

  const impactAreas = [
    {
      icon: Users,
      title: 'Formation des étudiants',
      description: 'Financement de workshops, hackathons et formations blockchain'
    },
    {
      icon: Target,
      title: 'Développement des antennes',
      description: 'Expansion vers de nouveaux établissements et pays'
    },
    {
      icon: Heart,
      title: 'Événements communautaires',
      description: 'Organisation de conférences et meetups gratuits'
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
            Soutenez notre mission
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Faire une donation
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Votre soutien nous aide à démocratiser l'accès aux technologies blockchain 
            et à former la prochaine génération d'innovateurs européens.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Votre impact
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Choisissez votre don</h2>
            
            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-4">Montant du don</label>
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
                  placeholder="Montant personnalisé"
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
              <label className="block text-white font-medium mb-4">Méthode de paiement</label>
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
                  Carte bancaire
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
                  Cryptomonnaie
                </button>
              </div>
            </div>

            {/* Donation Info */}
            <div className="bg-slate-700/50 rounded-lg p-6 mb-8">
              <h3 className="text-white font-medium mb-2">Récapitulatif</h3>
              <div className="flex justify-between items-center text-slate-300">
                <span>Montant du don:</span>
                <span className="text-xl font-bold text-blue-400">
                  {customAmount || amount}€
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-2">
                Votre don sera utilisé pour soutenir nos activités éducatives et le développement de notre communauté.
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Finaliser la donation
            </button>

            <p className="text-sm text-slate-400 text-center mt-4">
              Vos dons sont sécurisés et utilisés exclusivement pour les activités de l'association.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Transparence financière</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Nous publions régulièrement nos rapports financiers pour assurer une transparence totale 
            sur l'utilisation de vos dons.
          </p>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 border border-slate-600">
            Consulter nos rapports
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;
