import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, ArrowLeft, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import AntenneMapSingle from '@/components/AntenneMapSingle';

const AntenneDetail = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const antennesData = {
    essec: {
      name: t('antennes.essec.name'),
      city: t('cities.paris'),
      coordinates: { lat: 49.0334698, lng: 2.076515 },
      country: t('countries.france'),
      school: 'ESSEC Paris Cergy',
      schoolLogo: '/antennes/essec/logo.webp',
      descriptionKey: 'antennes.essec.description',
      heroImage: '/antennes/EssecFont.webp',
      contact: {
        email: t('antennes.essec.email'),
        phone: t('antennes.essec.phone'),
        address: t('antennes.essec.address')
      },
      bureau: [
        { name: t('antennes.essec.bureau.1.name'), role: t('antennes.essec.bureau.1.role'), photo: '/antennes/essec/gabriel.webp' },
        { name: t('antennes.essec.bureau.2.name'), role: t('antennes.essec.bureau.2.role'), photo: '/antennes/essec/arthur.webp' },
        { name: t('antennes.essec.bureau.3.name'), role: t('antennes.essec.bureau.3.role'), photo: '/antennes/essec/edgar.webp' },
        { name: t('antennes.essec.bureau.4.name'), role: t('antennes.essec.bureau.4.role'), photo: '/antennes/essec/paul.webp' }
      ],
      gallery: [
        '/antennes/essec/essec1.webp',
        '/antennes/essec/essec2.webp',
        '/antennes/essec/essec3.webp',
        '/antennes/essec/essec4.webp'
      ],
    },
    dauphine: {
      name: t('antennes.dauphine.name'),
      city: t('cities.paris'),
      coordinates: { lat: 48.870086669921875, lng: 2.273621082305908 },
      country: t('countries.france'),
      school: 'Paris Dauphine-PSL',
      schoolLogo: '/antennes/dauphine/logo.webp',
      descriptionKey: 'antennes.dauphine.description',
      heroImage: '/antennes/dauphine/dauphine-1.avif',
      contact: {
        email: t('antennes.dauphine.email'),
        phone: t('antennes.dauphine.phone'),
        address: t('antennes.dauphine.address')
      },
      bureau: [
        { name: t('antennes.dauphine.bureau.1.name'), role: t('antennes.dauphine.bureau.1.role'), photo: '/antennes/dauphine/MOUAWAD-Ray.webp' },
        { name: t('antennes.dauphine.bureau.2.name'), role: t('antennes.dauphine.bureau.2.role'), photo: '/antennes/dauphine/BOUKHARI-Yanis.webp' },
        { name: t('antennes.dauphine.bureau.3.name'), role: t('antennes.dauphine.bureau.3.role'), photo: '/antennes/dauphine/VAN_RENTERGHEM_Emiel.webp' },
        { name: t('antennes.dauphine.bureau.4.name'), role: t('antennes.dauphine.bureau.4.role'), photo: '/antennes/dauphine/MELLITI-Amine.webp' }
      ],
      gallery: [
        '/antennes/dauphine/dauphineGallery1.webp',
        '/antennes/dauphine/dauphineGallery2.webp',
        '/antennes/dauphine/dauphineGallery3.webp',
      ],
    },
    paris4: {
      name: t('cities.paris'),
      city: t('cities.paris'),
      coordinates: { lat: 48.858636, lng: 2.375139 },
      country: t('countries.france'),
      school: 'ESCP Business School',
      schoolLogo: 'https://www.cfa-sciences.fr/sites/default/files/inline-images/1200px-ESCP_LOGO_CMJN.png',
      description: t('branches.parisDescription4'),
      descriptionEn: t('branches.parisDescription4'),
      heroImage: 'https://escp.eu/sites/default/files/inline-images/Paris/Champerret-Campus/ESCP-Campus-Champerret-016-square-hotel-de-ville.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+X XX XX XX XX XX',
        address: '79 Avenue de la République 75011 Paris'
      },
      bureau: [
        { name: 'Antoine Leroy', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: 'Camille Dupont', role: t('roles.vicePresidente'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: 'Hugo Blanc', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' }
      ],
      gallery: [
        'https://media.licdn.com/dms/image/v2/D4E10AQGSYuvgGxd0bg/image-shrink_1280/image-shrink_1280/0/1713630614769?e=2147483647&v=beta&t=XgWZ4Pu55orzVM76NJMdQ3CzdZk0Fgrzdm9TPYWC9Sg',
        'https://media.licdn.com/dms/image/v2/D4E22AQF9QO3mLYD6rg/feedshare-shrink_800/feedshare-shrink_800/0/1713435841897?e=2147483647&v=beta&t=guc97PjUtfUSTJ9UcO4sHxXFZ86DJ2PHGEXktZQnVeY',
        'https://www.univ-lyon3.fr/medias/photo/kryptotour_1732016056202-jpg',
        'https://i.ytimg.com/vi/D1KWsD1pGwQ/maxresdefault.jpg',
        'https://www.devinci.fr/wordpress/wp-content/uploads/2022/11/KRYPTOSPHERE-1200x700.jpg',
        'https://www.planetegrandesecoles.com/wp-content/uploads/2022/05/Sans-titre-2.jpg.webp'
      ],
      descriptionKey: 'antennes.paris4.description'
    },
    londres: {
      name: t('cities.london'),
      city: t('cities.london'),
      coordinates: { lat: 51.5074, lng: -0.1278 },
      country: t('countries.uk'),
      school: 'Hult Business School',
      schoolLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/HULT_IBS_Logo_Outline_Black_%28cropped%29.png/640px-HULT_IBS_Logo_Outline_Black_%28cropped%29.png',
      description: t('branches.londonDescription'),
      descriptionEn: t('branches.londonDescription'),
      heroImage: 'https://img2.storyblok.com/f/45434/1200x800/4c78f7cd11/hult-london-postgraduate-virtual-tour.jpg',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: '+XX XX XX XX XX',
        address: '37–38 John Street London WC1N 2AT United Kingdom'
      },
      bureau: [
        { name: 'James Wilson', role: t('roles.president'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: 'Sarah Johnson', role: t('roles.vicePresident'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: 'David Brown', role: t('roles.treasurer'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' }
      ],
      gallery: [
        'https://media.licdn.com/dms/image/v2/D4E10AQGSYuvgGxd0bg/image-shrink_1280/image-shrink_1280/0/1713630614769?e=2147483647&v=beta&t=XgWZ4Pu55orzVM76NJMdQ3CzdZk0Fgrzdm9TPYWC9Sg',
        'https://media.licdn.com/dms/image/v2/D4E22AQF9QO3mLYD6rg/feedshare-shrink_800/feedshare-shrink_800/0/1713435841897?e=2147483647&v=beta&t=guc97PjUtfUSTJ9UcO4sHxXFZ86DJ2PHGEXktZQnVeY',
        'https://www.univ-lyon3.fr/medias/photo/kryptotour_1732016056202-jpg',
        'https://i.ytimg.com/vi/D1KWsD1pGwQ/maxresdefault.jpg',
        'https://www.devinci.fr/wordpress/wp-content/uploads/2022/11/KRYPTOSPHERE-1200x700.jpg',
        'https://www.planetegrandesecoles.com/wp-content/uploads/2022/05/Sans-titre-2.jpg.webp'
      ],
      descriptionKey: 'antennes.londres.description'
    },
    mons: {
      name: t('cities.mons'),
      city: t('cities.mons'),
      coordinates: { lat: 50.8503, lng: 4.3517 },
      country: t('countries.belgium'),
      school: 'HEH',
      schoolLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VjgnAtJ9fDWMfxpQvZhDoQghuizHlb9RIQ&s',
      description: t('branches.monsDescription'),
      descriptionEn: t('branches.monsDescription'),
      heroImage: '/antennes/mons/hero.webp',
      contact: {
        email: 'contact@kryptosphere.org',
        phone: ' ',
        address: '8 Avenue Victor Maistriau, 7000, Mons'
      },
      bureau: [
        { name: 'William HUBAUX', role: t('roles.presidente'), photo: '/antennes/William.webp' },
        { name: "Yassine N'CIRI", role: t('roles.vicePresident'), photo: '/antennes/Yassine.webp' },
        { name: 'Romain MOREAU', role: t('roles.tresoriere'), photo: '/antennes/Romain.webp' }
      ],
      gallery: [],
      descriptionKey: 'antennes.mons.description'
    },
    telecom: {
        name: t('antennes.telecom.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
        coordinates: { lat: 48.624853, lng: 2.444104 },
        school: 'Télécom SudParis/IMT BS',
        schoolLogo: '/lovable-uploads/imtbstsp.webp',
        descriptionKey: 'antennes.telecom.description',
        heroImage: '/antennes/telecom/telecom1.webp',
      contact: {
          email: t('antennes.telecom.email'),
          phone: t('antennes.telecom.phone'),
          address: t('antennes.telecom.address')
      },
      bureau: [
          { name: t('antennes.telecom.bureau.1.name'), role: t('antennes.telecom.bureau.1.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
          { name: t('antennes.telecom.bureau.2.name'), role: t('antennes.telecom.bureau.2.role'), photo: '/antennes/telecom/jeremy.webp' },
          { name: t('antennes.telecom.bureau.3.name'), role: t('antennes.telecom.bureau.3.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
          { name: t('antennes.telecom.bureau.4.name'), role: t('antennes.telecom.bureau.4.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' }
        ],
        gallery: [
          '/antennes/telecom/telecomGallery1.webp',
          '/antennes/telecom/telecomGallery2.webp',
          '/antennes/telecom/telecomGallery3.webp',
          '/antennes/telecom/telecomGallery4.webp',
          '/antennes/telecom/telecomGallery5.webp',
        ]
      },
    ieseg: {
      name: t('antennes.ieseg.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.892372131347656, lng: 2.235696315765381 },
      school: 'IESEG School of Management',
      schoolLogo: 'https://www.ieseg.fr/wp-content/uploads/IESEG-Logo-2012-rgb.jpg',
      descriptionKey: 'antennes.ieseg.description',
      heroImage: 'https://www.ieseg.fr/wp-content/themes/ieseg-2020/dps-2020/img/photos/visu_campus_paris.jpg',
      contact: {
        email: t('antennes.ieseg.email'),
        phone: t('antennes.ieseg.phone'),
        address: t('antennes.ieseg.address')
      },
      bureau: [
        { name: t('antennes.ieseg.bureau.1.name'), role: t('antennes.ieseg.bureau.1.role'), photo: '/antennes/ieseg/guillaume.webp' },
        { name: t('antennes.ieseg.bureau.2.name'), role: t('antennes.ieseg.bureau.2.role'), photo: '/antennes/ieseg/nicolas.webp' },
        { name: t('antennes.ieseg.bureau.3.name'), role: t('antennes.ieseg.bureau.3.role'), photo: '/antennes/ieseg/adrian.webp' },
        { name: t('antennes.ieseg.bureau.4.name'), role: t('antennes.ieseg.bureau.4.role'), photo: '/antennes/ieseg/paolo.webp' },
        { name: t('antennes.ieseg.bureau.5.name'), role: t('antennes.ieseg.bureau.5.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: t('antennes.ieseg.bureau.6.name'), role: t('antennes.ieseg.bureau.6.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: t('antennes.ieseg.bureau.7.name'), role: t('antennes.ieseg.bureau.7.role'), photo: '/antennes/ieseg/louis.webp' },
        { name: t('antennes.ieseg.bureau.8.name'), role: t('antennes.ieseg.bureau.8.role'), photo: '/antennes/ieseg/clarence.webp' }
      ],
      gallery: [
        '/antennes/ieseg/ieseg1.webp',
        '/antennes/ieseg/ieseg2.webp',
        '/antennes/ieseg/ieseg3.webp',
      ]
    },
    lyon: {
      name: t('antennes.lyon.name'),
      city: t('cities.lyon'),
      country: t('countries.france'),
      coordinates: { lat: 45.74861, lng: 4.86000 },
      school: 'IAE Lyon',
      schoolLogo: 'https://www.eduopinions.com/wp-content/uploads/2018/02/iae_lyon.png',
      descriptionKey: 'antennes.lyon.description',
      heroImage: 'https://cdn.pixabay.com/photo/2022/04/07/13/33/lyon-7117498_1280.jpg',
      contact: {
        email: t('antennes.lyon.email'),
        phone: t('antennes.lyon.phone'),
        address: t('antennes.lyon.address')
      },
      bureau: [
        { name: t('antennes.lyon.bureau.1.name'), role: t('antennes.lyon.bureau.1.role'), photo: '/antennes/lyon/RaphaelPAUTARD.webp' },
        { name: t('antennes.lyon.bureau.2.name'), role: t('antennes.lyon.bureau.2.role'), photo: '/antennes/lyon/alexandre.webp' },
        { name: t('antennes.lyon.bureau.3.name'), role: t('antennes.lyon.bureau.3.role'), photo: '/antennes/lyon/JessicaDINOTA.webp' },
        { name: t('antennes.lyon.bureau.4.name'), role: t('antennes.lyon.bureau.4.role'), photo: '/antennes/lyon/ClementCARVALHO.webp' },
        { name: t('antennes.lyon.bureau.5.name'), role: t('antennes.lyon.bureau.5.role'), photo: '/antennes/lyon/CharlotteBECHON.webp' }
      ],
      gallery: [
        '/antennes/lyon/iaelyonGallery1.webp',
        '/antennes/lyon/iaelyonGallery2.webp',
        '/antennes/lyon/iaelyonGallery5.webp',
        '/antennes/lyon/iaelyonGallery6.webp',
        '/antennes/lyon/iaelyonGallery7.webp',
        '/antennes/lyon/iaelyonGallery8.webp',
        '/antennes/lyon/iaelyonGallery10.webp',
        'https://www.univ-lyon3.fr/medias/photo/kryptotour_1732016056202-jpg',
        'https://i.ytimg.com/vi/D1KWsD1pGwQ/maxresdefault.jpg'
      ],
    },
    neoma: {
      name: t('antennes.neoma.name'),
      city: t('cities.reims'),
      country: t('countries.france'),
      coordinates: { lat: 49.238939, lng: 4.002990 },
      school: 'NEOMA',
      schoolLogo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo-NEOMA-2016.png',
      descriptionKey: 'antennes.neoma.description',
      heroImage: 'https://www.fondation-neoma.fr/sites/fondation/files/styles/w2000/public/2023-11/NEOMA_Front.png?h=fb205de0&itok=sDaXH5eq',
      contact: {
        email: t('antennes.neoma.email'),
        phone: t('antennes.neoma.phone'),
        address: t('antennes.neoma.address')
      },
      bureau: [
        { name: t('antennes.neoma.bureau.1.name'), role: t('antennes.neoma.bureau.1.role'), photo: '/antennes/neoma/bureau/lucas.webp' },
        { name: t('antennes.neoma.bureau.2.name'), role: t('antennes.neoma.bureau.2.role'), photo: '/antennes/neoma/bureau/axel.webp' },
        { name: t('antennes.neoma.bureau.3.name'), role: t('antennes.neoma.bureau.3.role'), photo: '/antennes/neoma/bureau/emeric.webp' },
        { name: t('antennes.neoma.bureau.4.name'), role: t('antennes.neoma.bureau.4.role'), photo: '/antennes/neoma/bureau/hugo.webp' },
        { name: t('antennes.neoma.bureau.5.name'), role: t('antennes.neoma.bureau.5.role'), photo: '/antennes/neoma/bureau/arthur.webp' },
        { name: t('antennes.neoma.bureau.6.name'), role: t('antennes.neoma.bureau.6.role'), photo: '/antennes/neoma/bureau/victor.webp' },
        { name: t('antennes.neoma.bureau.7.name'), role: t('antennes.neoma.bureau.7.role'), photo: '/antennes/neoma/bureau/olivier.webp' },
        { name: t('antennes.neoma.bureau.8.name'), role: t('antennes.neoma.bureau.8.role'), photo: '/antennes/neoma/bureau/youssef.webp' }
      ],
      gallery: [
        '/antennes/neoma/evenements/conference.webp',
        '/antennes/neoma/evenements/formation.webp'
      ]
    },
    aes: {
      name: t('antennes.aes.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.87514877319336, lng: 2.351832389831543 },
      school: 'Albert Eugenia School (AES)',
      schoolLogo: '/antennes/aes/albertLogo.webp',
      descriptionKey: 'antennes.aes.description',
      heroImage: '/antennes/aes/hero.webp',
      contact: {
        email: t('antennes.aes.email'),
        phone: t('antennes.aes.phone'),
        address: t('antennes.aes.address')
      },
      bureau: [
        { name: t('antennes.aes.bureau.1.name'), role: t('antennes.aes.bureau.1.role'), photo: '/antennes/aes/DianeDoualapic.webp' },
        { name: t('antennes.aes.bureau.2.name'), role: t('antennes.aes.bureau.2.role'), photo: '/antennes/aes/PaulinRandon.webp' },
        { name: t('antennes.aes.bureau.3.name'), role: t('antennes.aes.bureau.3.role'), photo: '/antennes/aes/DangVo.webp' }
      ],
      gallery: []
    },
    inseecparis: {
      name: t('antennes.inseecparis.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.88954544067383, lng: 2.2442686557769775 },
      school: 'INSEEC Paris',
      schoolLogo: '/antennes/inseec/logo.webp',
      descriptionKey: 'antennes.inseecparis.description',
      heroImage: '/antennes/inseec/hero.webp',
      contact: {
        email: t('antennes.inseecparis.email'),
        phone: t('antennes.inseecparis.phone'),
        address: t('antennes.inseecparis.address')
      },
      bureau: [
        { name: t('antennes.inseecparis.bureau.1.name'), role: t('antennes.inseecparis.bureau.1.role'), photo: '/antennes/inseec/bureau/Antoine.webp' },
        { name: t('antennes.inseecparis.bureau.2.name'), role: t('antennes.inseecparis.bureau.2.role'), photo: '/antennes/inseec/bureau/Kylian.webp' },
        { name: t('antennes.inseecparis.bureau.3.name'), role: t('antennes.inseecparis.bureau.3.role'), photo: '/antennes/inseec/bureau/Prince.webp' },
        { name: t('antennes.inseecparis.bureau.4.name'), role: t('antennes.inseecparis.bureau.4.role'), photo: '/antennes/inseec/bureau/Khayla.webp' },
        { name: t('antennes.inseecparis.bureau.5.name'), role: t('antennes.inseecparis.bureau.5.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' },
        { name: t('antennes.inseecparis.bureau.6.name'), role: t('antennes.inseecparis.bureau.6.role'), photo: '/antennes/inseec/bureau/Selma.webp' },
        { name: t('antennes.inseecparis.bureau.7.name'), role: t('antennes.inseecparis.bureau.7.role'), photo: '/antennes/inseec/bureau/Inass.webp' }
      ],
      gallery: [
        '/antennes/inseec/events/nftparis/gallery1.webp',
        '/antennes/inseec/events/nftparis/gallery2.webp',
        '/antennes/inseec/events/nftparis/gallery3.webp',
        '/antennes/inseec/events/nftparis/gallery4.webp',
        '/antennes/inseec/events/nftparis/gallery5.webp',
        '/antennes/inseec/events/nftparis/gallery6.webp',
      ]
    },
    ensiie: {
      name: t('antennes.ensiie.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.62651443481445, lng: 2.432352066040039 },
      school: 'ensIIE',
      schoolLogo: '/antennes/ensiie/logo.webp',
      descriptionKey: 'antennes.ensiie.description',
      heroImage: '/antennes/ensiie/hero.webp',
      contact: {
        email: t('antennes.ensiie.email'),
        phone: t('antennes.ensiie.phone'),
        address: t('antennes.ensiie.address')
      },
      bureau: [
        { name: t('antennes.ensiie.bureau.1.name'), role: t('antennes.ensiie.bureau.1.role'), photo: '/antennes/ensiie/bureau/sarangan.webp' },
        { name: t('antennes.ensiie.bureau.2.name'), role: t('antennes.ensiie.bureau.2.role'), photo: '/antennes/ensiie/bureau/corentin.webp' },
        { name: t('antennes.ensiie.bureau.3.name'), role: t('antennes.ensiie.bureau.3.role'), photo: '/antennes/ensiie/bureau/tom.webp' },
        { name: t('antennes.ensiie.bureau.4.name'), role: t('antennes.ensiie.bureau.4.role'), photo: '/lovable-uploads/09ad2ee0-d2c3-4ce2-846e-f48afe38a9d3.webp' }
      ],
      gallery: [
        '/antennes/ensiie/events/gallery1.webp',
        '/antennes/ensiie/events/gallery2.webp',
        '/antennes/ensiie/events/gallery3.webp',
        '/antennes/ensiie/events/gallery4.webp',
        '/antennes/ensiie/events/gallery5.webp',
      ]
    },
    epita: {
      name: t('antennes.epita.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.81573486328125, lng: 2.3623597621917725 },
      school: 'EPITA',
      schoolLogo: '/antennes/epita/logo.webp',
      descriptionKey: 'antennes.epita.description',
      heroImage: '/antennes/epita/hero.webp',
      contact: {
        email: t('antennes.epita.email'),
        phone: t('antennes.epita.phone'),
        address: t('antennes.epita.address')
      },
      bureau: [
        { name: t('antennes.epita.bureau.1.name'), role: t('antennes.epita.bureau.1.role'), photo: '/antennes/epita/bureau/louise.webp' },
        { name: t('antennes.epita.bureau.2.name'), role: t('antennes.epita.bureau.2.role'), photo: '/antennes/epita/bureau/lara.webp' },
        { name: t('antennes.epita.bureau.3.name'), role: t('antennes.epita.bureau.3.role'), photo: '/antennes/epita/bureau/clara.webp' },
        { name: t('antennes.epita.bureau.4.name'), role: t('antennes.epita.bureau.4.role'), photo: '/antennes/epita/bureau/ines.webp' },
        { name: t('antennes.epita.bureau.5.name'), role: t('antennes.epita.bureau.5.role'), photo: '/antennes/epita/bureau/amina.webp' }
      ],
      gallery: [
        '/antennes/epita/events/gallery1.webp',
        '/antennes/epita/events/gallery2.webp',
      ]
    },
    devinci: {
      name: t('antennes.devinci.name'),
      city: t('cities.paris'),
      country: t('countries.france'),
      coordinates: { lat: 48.89591598510742, lng: 2.2204883098602295 },
      school: 'Léonard De Vinci',
      schoolLogo: '/lovable-uploads/devinci.webp',
      heroImage: 'https://images.pexels.com/photos/2389273/pexels-photo-2389273.jpeg?_gl=1*1trpnet*_ga*MTgxNTM4ODkzNi4xNzQ5OTMwMzY2*_ga_8JE65Q40S6*czE3NDk5MzAzNjYkbzEkZzEkdDE3NDk5MzAzODYkajQwJGwwJGgw',
      contact: {
        email: t('antennes.devinci.email'),
        phone: t('antennes.devinci.phone'),
        address: t('antennes.devinci.address')
      },
      bureau: [
        { name: t('antennes.devinci.bureau.1.name'), role: t('antennes.devinci.bureau.1.role'), photo: '/antennes/devinci/eden.webp' },
        { name: t('antennes.devinci.bureau.2.name'), role: t('antennes.devinci.bureau.2.role'), photo: '/antennes/devinci/fawzi.webp' },
        { name: t('antennes.devinci.bureau.3.name'), role: t('antennes.devinci.bureau.3.role'), photo: '/antennes/devinci/romain.webp' },
        { name: t('antennes.devinci.bureau.4.name'), role: t('antennes.devinci.bureau.4.role'), photo: '/antennes/devinci/kylie.webp' },
        { name: t('antennes.devinci.bureau.5.name'), role: t('antennes.devinci.bureau.5.role'), photo: '/antennes/devinci/johann.webp' },
        { name: t('antennes.devinci.bureau.6.name'), role: t('antennes.devinci.bureau.6.role'), photo: '/antennes/devinci/alban.webp' }
      ],
      gallery: [
        '/antennes/devinci/gallery1.webp',
        '/antennes/devinci/gallery2.webp',
        '/antennes/devinci/gallery3.webp',
        '/antennes/devinci/gallery4.webp',
        '/antennes/devinci/gallery5.webp',
        '/antennes/devinci/gallery6.webp',
        '/antennes/devinci/gallery7.webp',
        '/antennes/devinci/gallery8.webp',
        '/antennes/devinci/gallery9.webp',
      ]
    },
    imtatlantique: {
      name: t('antennes.imtatlantique.name'),
      city: t('cities.nantes'),
      country: t('countries.france'),
      coordinates: { lat: 47.281455993652344, lng: -1.5201970338821411 },
      school: 'IMT Atlantique',
      schoolLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/IMT_Atlantique.svg/1200px-IMT_Atlantique.svg.png',
      descriptionKey: 'antennes.imtatlantique.description',
      heroImage: 'https://cdn.pixabay.com/photo/2017/07/26/20/12/nantes-2542973_1280.jpg',
      contact: {
        email: t('antennes.imtatlantique.email'),
        phone: t('antennes.imtatlantique.phone'),
        address: t('antennes.imtatlantique.address')
      },
      bureau: [
        { name: t('antennes.imtatlantique.bureau.1.name'), role: t('antennes.imtatlantique.bureau.1.role'), photo: '/antennes/imtAtlantique/RYM.webp' },
        { name: t('antennes.imtatlantique.bureau.2.name'), role: t('antennes.imtatlantique.bureau.2.role'), photo: '/antennes/imtAtlantique/DAVID_HADDAD.webp' },
        { name: t('antennes.imtatlantique.bureau.3.name'), role: t('antennes.imtatlantique.bureau.3.role'), photo: '/antennes/imtAtlantique/LUCAS.webp' },
        { name: t('antennes.imtatlantique.bureau.4.name'), role: t('antennes.imtatlantique.bureau.4.role'), photo: '/antennes/imtAtlantique/CHLOE.webp' },
        { name: t('antennes.imtatlantique.bureau.5.name'), role: t('antennes.imtatlantique.bureau.5.role'), photo: '/antennes/imtAtlantique/DAVID_OUEDRAOGO.webp' },
        { name: t('antennes.imtatlantique.bureau.6.name'), role: t('antennes.imtatlantique.bureau.6.role'), photo: '/antennes/imtAtlantique/TEODORE.webp' },
        { name: t('antennes.imtatlantique.bureau.7.name'), role: t('antennes.imtatlantique.bureau.7.role'), photo: '/antennes/imtAtlantique/ACHRAF.webp' },
        { name: t('antennes.imtatlantique.bureau.8.name'), role: t('antennes.imtatlantique.bureau.8.role'), photo: '/antennes/imtAtlantique/INES.webp' },
        { name: t('antennes.imtatlantique.bureau.9.name'), role: t('antennes.imtatlantique.bureau.9.role'), photo: '/antennes/imtAtlantique/THOMAS.webp' },
        { name: t('antennes.imtatlantique.bureau.10.name'), role: t('antennes.imtatlantique.bureau.10.role'), photo: '/antennes/imtAtlantique/TELMO.webp' },
        { name: t('antennes.imtatlantique.bureau.11.name'), role: t('antennes.imtatlantique.bureau.11.role'), photo: '/antennes/imtAtlantique/GAUTIER.webp' },
        { name: t('antennes.imtatlantique.bureau.12.name'), role: t('antennes.imtatlantique.bureau.12.role'), photo: '/antennes/imtAtlantique/SARA.webp' }
      ],
      gallery: [
        '/antennes/imtAtlantique/EVENT.webp',
        '/antennes/imtAtlantique/EVENT2.webp',
        '/antennes/imtAtlantique/EVENT3.webp',
        '/antennes/imtAtlantique/EVENT4.webp',
        '/antennes/imtAtlantique/EVENT5.webp'
      ]
    }
  };

  const antenne = antennesData[id as keyof typeof antennesData];

  if (!antenne) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <Navigation />
        <div className="pt-24 text-center text-white">
          <h1 className="text-4xl font-bold">{t('antenne.notFound')}</h1>
          <Link to="/antennes" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            {t('branches.backToList')}
          </Link>
        </div>
      </div>
    );
  }

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
              {t('branches.backToList')}
            </Link>

            <div className="max-w-4xl w-full p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <img
                  src={antenne.schoolLogo}
                  alt={antenne.school}
                  loading="lazy"
                  className="max-w-28 max-h-28 bg-white rounded-lg p-2 object-contain"
                />
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2 break-words">
                    KRYPTOSPHERE® <span className="text-blue-400">{antenne.name}</span>
                  </h1>
                  <p className="text-xl text-slate-300 break-words">{antenne.school}</p>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed text-justify break-words">
                {('descriptionKey' in antenne && antenne.descriptionKey)
                  ? t(antenne.descriptionKey)
                  : ('description' in antenne && antenne.description)
                    ? antenne.description
                    : ''}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Bureau Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            {t('branches.bureauYear').replace('{city}', antenne.name)}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {antenne.bureau.map((member, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden mx-auto mb-6 border-2 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold text-white mb-8">{t('branches.contact')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">{t('antenne.email')}</p>
                    <a href={`mailto:${antenne.contact.email}`} className="text-blue-400 hover:text-blue-300">
                      {antenne.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">{t('antenne.phone')}</p>
                    <a href={`tel:${antenne.contact.phone}`} className="text-blue-400 hover:text-blue-300">
                      {antenne.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <MapPin className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">{t('antenne.address')}</p>
                    <p>{antenne.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              {/* Map fills full width */}
              <div className="h-80 w-full">
                <AntenneMapSingle antenne={antenne} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {antenne.gallery && antenne.gallery.length > 0 && (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t('branches.gallery')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {antenne.gallery.map((image, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden bg-slate-800">
                <img
                  src={image}
                  alt={`${t('branches.gallery')} ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      <Footer />
    </div>
  );
};

export default AntenneDetail;
