
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Download, Eye, FileText } from 'lucide-react';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const publications = [
    {
      id: 1,
      title: "KryptoPaper Edition 25",
      date: "JANVIER 2025",
      category: "kryptopaper",
      description: "Analyse des tendances blockchain 2025 et perspectives d'avenir",
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: "15 min"
    },
    {
      id: 2,
      title: "Guide DeFi pour débutants",
      date: "DÉCEMBRE 2024",
      category: "guide",
      description: "Introduction complète à la finance décentralisée",
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: "20 min"
    },
    {
      id: 3,
      title: "Rapport annuel 2024",
      date: "DÉCEMBRE 2024",
      category: "rapport",
      description: "Bilan des activités et accomplissements de l'année",
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: "30 min"
    },
    {
      id: 4,
      title: "KryptoPaper Edition 24",
      date: "OCTOBRE 2024",
      category: "kryptopaper",
      description: "Spécial NFTs et métaverse",
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: "18 min"
    },
    {
      id: 5,
      title: "Étude: Blockchain dans l'éducation",
      date: "SEPTEMBRE 2024",
      category: "etude",
      description: "Impact des technologies blockchain sur l'enseignement supérieur",
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: "25 min"
    },
    {
      id: 6,
      title: "Guide Smart Contracts",
      date: "AOÛT 2024",
      category: "guide",
      description: "Développement et déploiement de smart contracts",
      image: "/placeholder.svg",
      downloadUrl: "#",
      readTime: "35 min"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes', count: publications.length },
    { id: 'kryptopaper', name: 'KryptoPaper', count: publications.filter(p => p.category === 'kryptopaper').length },
    { id: 'guide', name: 'Guides', count: publications.filter(p => p.category === 'guide').length },
    { id: 'rapport', name: 'Rapports', count: publications.filter(p => p.category === 'rapport').length },
    { id: 'etude', name: 'Études', count: publications.filter(p => p.category === 'etude').length }
  ];

  const filteredPublications = selectedCategory === 'all' 
    ? publications 
    : publications.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-lg border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
            <FileText className="w-4 h-4" />
            Ressources et contenus éducatifs
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Publications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos analyses, guides et rapports sur l'écosystème blockchain. 
            Des ressources créées par et pour la communauté étudiante.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                }`}
              >
                {category.name}
                <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication) => (
              <div
                key={publication.id}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  <img 
                    src={publication.image} 
                    alt={publication.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-blue-400 font-medium uppercase">
                    {publication.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {publication.date}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-300 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {publication.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {publication.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {publication.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Lire
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-12 border border-slate-700/50">
            <h2 className="text-4xl font-bold mb-6 text-white">Restez informé</h2>
            <p className="text-xl mb-8 text-slate-300">
              Recevez nos dernières publications directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
