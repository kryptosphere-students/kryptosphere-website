
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, ArrowLeft, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const AntenneDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const antennesData = {
    paris: {
      name: 'Paris',
      city: 'Paris',
      country: 'France',
      school: 'HEC Paris',
      schoolLogo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png',
      description: 'Notre antenne parisienne, au cœur de l\'écosystème blockchain français, rassemble les meilleurs talents des grandes écoles parisiennes.',
      descriptionEn: 'Our Parisian branch, at the heart of the French blockchain ecosystem, brings together the best talents from top Parisian schools.',
      heroImage: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=2000',
      contact: {
        email: 'paris@kryptosphere.org',
        phone: '+33 1 23 45 67 89',
        address: '1 Rue de la Libération, 78350 Jouy-en-Josas'
      },
      bureau: [
        { name: 'Marie Dubois', role: 'Présidente', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Pierre Martin', role: 'Vice-Président', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sophie Laurent', role: 'Trésorière', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Thomas Bernard', role: 'Secrétaire', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    nantes: {
      name: 'Nantes',
      city: 'Nantes',
      country: 'France',
      school: 'Audencia Business School',
      schoolLogo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png',
      description: 'L\'antenne nantaise, dynamique et innovante dans l\'ouest de la France, développe l\'écosystème blockchain régional.',
      descriptionEn: 'The Nantes branch, dynamic and innovative in western France, develops the regional blockchain ecosystem.',
      heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000',
      contact: {
        email: 'nantes@kryptosphere.org',
        phone: '+33 2 23 45 67 89',
        address: '8 Route de la Jonelière, 44312 Nantes'
      },
      bureau: [
        { name: 'Julie Moreau', role: 'Présidente', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Lucas Petit', role: 'Vice-Président', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Emma Roux', role: 'Trésorière', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    lille: {
      name: 'Lille',
      city: 'Lille',
      country: 'France',
      school: 'EDHEC Business School',
      schoolLogo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png',
      description: 'L\'antenne lilloise, proche de la frontière belge, crée des ponts entre les écosystèmes français et européens.',
      descriptionEn: 'The Lille branch, close to the Belgian border, creates bridges between French and European ecosystems.',
      heroImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2000',
      contact: {
        email: 'lille@kryptosphere.org',
        phone: '+33 3 23 45 67 89',
        address: '24 Avenue Gustave Delory, 59057 Roubaix'
      },
      bureau: [
        { name: 'Antoine Leroy', role: 'Président', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Camille Dupont', role: 'Vice-Présidente', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Hugo Blanc', role: 'Trésorier', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    londres: {
      name: 'Londres',
      city: 'Londres',
      country: 'Royaume-Uni',
      school: 'London Business School',
      schoolLogo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png',
      description: 'Notre première antenne internationale, au cœur de la City londonienne, connecte les talents européens.',
      descriptionEn: 'Our first international branch, in the heart of London\'s City, connects European talents.',
      heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000',
      contact: {
        email: 'london@kryptosphere.org',
        phone: '+44 20 1234 5678',
        address: 'Sussex Place, Regent\'s Park, London NW1 4SA'
      },
      bureau: [
        { name: 'James Wilson', role: 'President', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Sarah Johnson', role: 'Vice-President', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'David Brown', role: 'Treasurer', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    },
    bruxelles: {
      name: 'Bruxelles',
      city: 'Bruxelles',
      country: 'Belgique',
      school: 'Solvay Brussels School',
      schoolLogo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png',
      description: 'L\'antenne bruxelloise, au cœur des institutions européennes, influence les politiques blockchain.',
      descriptionEn: 'The Brussels branch, at the heart of European institutions, influences blockchain policies.',
      heroImage: 'https://images.unsplash.com/photo-1559113122-3f2b707ba3c6?q=80&w=2000',
      contact: {
        email: 'brussels@kryptosphere.org',
        phone: '+32 2 123 45 67',
        address: 'Avenue Franklin Roosevelt 50, 1050 Bruxelles'
      },
      bureau: [
        { name: 'Claire Vandenberghe', role: 'Présidente', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Maxime Van Der Berg', role: 'Vice-Président', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' },
        { name: 'Laura Janssens', role: 'Trésorière', photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.png' }
      ]
    }
  };

  const antenne = antennesData[id as keyof typeof antennesData];

  if (!antenne) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <Navigation />
        <div className="pt-24 text-center text-white">
          <h1 className="text-4xl font-bold">Antenne non trouvée</h1>
          <Link to="/antennes" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Retour aux antennes
          </Link>
        </div>
      </div>
    );
  }

  const gallery = [
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    'https://images.unsplash.com/photo-1515169067868-5387ec70266d?q=80&w=800',
    'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=800',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${antenne.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <Link 
              to="/antennes" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Retour aux antennes
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src={antenne.schoolLogo} 
                  alt={antenne.school}
                  className="w-16 h-16 bg-white rounded-lg p-2"
                />
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2">
                    Kryptosphere <span className="text-blue-400">{antenne.name}</span>
                  </h1>
                  <p className="text-xl text-slate-300">{antenne.school}</p>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                {t('language') === 'fr' ? antenne.description : antenne.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bureau Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Bureau {antenne.name} 2025
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {antenne.bureau.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Nous contacter</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${antenne.contact.email}`} className="text-blue-400 hover:text-blue-300">
                      {antenne.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-300">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href={`tel:${antenne.contact.phone}`} className="text-blue-400 hover:text-blue-300">
                      {antenne.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-300">
                  <MapPin className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p>{antenne.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-slate-800 rounded-xl overflow-hidden h-80">
              <div className="h-full flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-blue-400" />
                  <p className="text-lg">Carte de localisation</p>
                  <p className="text-sm">{antenne.city}, {antenne.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden bg-slate-800">
                <img 
                  src={image} 
                  alt={`Galerie ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntenneDetail;
