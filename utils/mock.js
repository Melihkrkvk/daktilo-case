import { IconHome, IconDashboard, IconFileText } from '@tabler/icons-react';
import Link from 'next/link';
export const links = [
  {
      link: '/',
      label: 'Anasayfa',
  },
  {
      link: '/authors',
      label: 'Yazarlar',
  },
  {
      link: '/demo',
      label: 'Grid',
  },
  {
      link: '/GridSkel',
      label: 'Grid Skel',
  },
];

export const footerData = [
  {
      title: 'Bağlantılar',
      links: [
        {
          link: '/',
          label: 'Anasayfa'
      },
        {
          link: '/',
          label: 'Anasayfa'
      },
        {
          link: '/',
          label: 'Anasayfa'
      },
    ]
  },
  {
      title: 'Hakkımızda',
      links: [
        {
          link: '/',
          label: 'Anasayfa',
      },
        {
          link: '/',
          label: 'Anasayfa',
      },
        {
          link: '/',
          label: 'Anasayfa',
      },
    ]
  },
  {
      title: 'Gündem',
      links: [
        {
          link: '/',
          label: 'Anasayfa',
      },
        {
          link: '/',
          label: 'Anasayfa',
      },
        {
          link: '/',
          label: 'Anasayfa',
      },
    ]
  },
  
];

export const cardData = [
  {
    title:'Bugun hava çok soğuk',
    image:"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2549&q=80",
    imageAlt:"No way!",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Dui id ornare arcu odio. Proin sagittis nisl rhoncus mattis. Ultricies mi quis hendrerit dolor magna eget est lorem. Fringilla est ullamcorper eget nulla facilisi etiam. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Porttitor massa id neque aliquam vestibulum morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Ornare arcu odio ut sem nulla.',
    ads: 'RESMİ İLANDIR'
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare',
    image:"https://images.unsplash.com/photo-1605581810011-c6d684e7ca22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1676&q=80",
    imageAlt:"No way!",
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1535916707207-35f97e715e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cmtleXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt:"No way!",
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://media.istockphoto.com/id/1499055290/tr/foto%C4%9Fraf/1-4-gold-stands-on-the-jewelers-table.jpg?s=612x612&w=0&k=20&c=jcRkI_U4wX93PR6yPe7bqbY5LaHTjYLSGJcXedAP52A=",
    imageAlt:"No way!",
  },
  

];

export const gridData = [
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1633158829875-e5316a358c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    imageAlt:"No way!",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Dui id ornare arcu odio. Proin sagittis nisl rhoncus mattis. Ultricies mi quis hendrerit dolor magna eget est lorem. Fringilla est ullamcorper eget nulla facilisi etiam. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Porttitor massa id neque aliquam vestibulum morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Ornare arcu odio ut sem nulla.',
    category: 'Ekonomi'
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt:"No way!",
    category: 'Spor'
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    imageAlt:"No way!",
    category: 'Ekonomi'
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
    imageAlt:"No way!",
    category: 'Magazin'
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=882&q=80",
    imageAlt:"No way!",
    category: 'Ekonomi'
  },
  {
    title:'İstanbul Su Ve Kanalizasyon İdare...',
    image:"https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    imageAlt:"No way!",
    category: 'Magazin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Dui id ornare arcu odio. Proin sagittis nisl rhoncus mattis. Ultricies mi quis hendrerit dolor magna eget est lorem. Fringilla est ullamcorper eget nulla facilisi etiam. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Porttitor massa id neque aliquam vestibulum morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Ornare arcu odio ut sem nulla.',
  },
  

];

export const authorsData = [
  {
    avatar: '' ,
    name: 'John john', 
    email: 'melih.kurukavak@daktilo.com', 
    job: 'Engineer',
  },
  {
    avatar: 'https://media.istockphoto.com/id/185727214/tr/foto%C4%9Fraf/unhappy-man-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=9dsGLs48QGcBjoaTDTltO2-qbKgYq_50F4zjIrc3jh4=', 
    name: 'John Doe', 
    email: 'johndoe@daktilo.com', 
    job: 'Engineer',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1639747280929-e84ef392c69a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', 
    name: 'John Doe 2', 
    email: 'johndoe@daktilo.com', 
    job: 'Engineer',
  },
  {
    avatar: 'https://images.unsplash.com/photo-1583674392771-2abf6be75965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80', 
    name: 'John Doe 3', 
    email: 'johndoe@daktilo.com', 
    job: 'Engineer',
  },
];

export const sliderData = [
    {
        image:
          'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Best forests to visit in North America',
        category: 'nature',
      
      },
      {
        image:
          'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Hawaii beaches review: better than you think',
        category: 'beach',
      },
      {
        image:
          'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'nature',
      },
      {
        image:
          'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Aurora in Norway: when to visit for best experience',
        category: 'nature',
      },
      {
        image:
          'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Best places to visit this winter',
        category: 'tourism',
      },
      {
        image:
          'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: 'Active volcanos reviews: travel at your own risk',
        category: 'nature',
      },
];

export const searchData = [
  {
    title: 'Anasayfa',
    description: 'Anasayfaya Git',
    onTrigger: () => <Link href='/'></Link>,
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: 'Gündem',
    description: 'Gündemi Görüntüle',
    onTrigger: () => console.log('Dashboard'),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: 'Yazarlar',
    description: 'Yazarlar Sayfasına Git',
    onTrigger: () => console.log('Documentation'),
    icon: <IconFileText size="1.2rem" />,
  },
];

export const headerTabData = [
  {
    label: 'Anasayfa',
    link: '/',
  },
  {
    label: 'Yazarlar',
    link: '/authors',
  },
  {
    label: 'Demo',
    link: '/demo',
  },
];