const phoneNumber = process.env.PHONE_NUMBER;
const message = 'Olá, Hugo! Vi seu portfólio e gostaria de conversar sobre um possível projeto. Podemos conversar?';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const emailAddress = process.env.EMAIL_ADDRESS;

export const contact = [
  {
    icon: '/icons/contact/whatsapp.svg',
    name: 'WhatsApp', 
    description: 'WhatsApp',
    link: whatsappUrl,
  },
  {
    icon: '/icons/contact/gmail.svg',
    name: 'Gmail', 
    description: 'Enviar E-mail',
    link: `mailto:${emailAddress}`,
  },
];

export const social = [
  {
    icon: '/icons/contact/linkedin.svg',
    name: 'LinkedIn', 
    link: 'https://www.linkedin.com/in/hugovrp/',
  },
  {
    icon: '/icons/contact/github.svg',
    name: 'GitHub', 
    link: 'https://github.com/hugovrp',
  },
  {
    icon: '/icons/contact/instagram.svg',
    name: 'Instagram', 
    link: 'https://www.instagram.com/hugovrp_/',
  },
];