
import React from 'react';
import { Calendar, MapPin, Users, ExternalLink, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Blockchain Workshop: Smart Contracts 101",
      date: "2024-01-15",
      time: "18:00",
      location: "Lyon Tech Hub",
      attendees: 45,
      description: "Apprenez les bases des smart contracts avec Solidity",
      lumaUrl: "https://lu.ma/event/evt-123456789",
      tags: ["Workshop", "Smart Contracts", "Solidity"]
    },
    {
      id: 2,
      title: "DeFi Deep Dive: Yield Farming Strategies",
      date: "2024-01-22",
      time: "19:30",
      location: "Station F Paris",
      attendees: 78,
      description: "Explorez les stratégies avancées de yield farming",
      lumaUrl: "https://lu.ma/event/evt-987654321",
      tags: ["DeFi", "Yield Farming", "Finance"]
    },
    {
      id: 3,
      title: "NFT Marketplace Development",
      date: "2024-01-29",
      time: "17:00",
      location: "Online",
      attendees: 120,
      description: "Construisez votre propre marketplace NFT",
      lumaUrl: "https://lu.ma/event/evt-456789123",
      tags: ["NFT", "Development", "Marketplace"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Événements
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez nos événements exclusifs et plongez dans l'univers blockchain. 
            Workshops, conférences et networking avec les leaders de l'écosystème crypto.
          </p>

          {/* Lu.ma Integration Button */}
          <div className="mb-16">
            <a
              href="https://lu.ma/kryptosphere"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
            >
              <Calendar className="w-5 h-5" />
              Voir tous nos événements sur Lu.ma
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Événements à venir
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Event Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-300">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{event.attendees} participants</span>
                  </div>
                </div>

                {/* Lu.ma Button */}
                <a
                  href={event.lumaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group/btn"
                >
                  S'inscrire sur Lu.ma
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Événements passés
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Découvrez les moments forts de nos précédents événements et rejoignez notre communauté grandissante.
          </p>
          
          <a
            href="https://lu.ma/kryptosphere/past"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-medium hover:border-purple-500 hover:text-purple-300 transition-all duration-300"
          >
            Voir les événements passés
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
