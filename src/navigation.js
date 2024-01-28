const headerData = {
  links: [
    { text: 'Home', href: '/' },
    /*    { text: 'Resume', href: '/resume' },
    { text: 'Projects', href: '/projects' }, */
  ],
};

const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/afifjmm/' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AfifJ' },
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/afif-jamhari-672102152',
    },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:afifjamhari99@gmail.com' },
  ],
};

const ctaLink = {
  text: "Let's Work Together",
  href: 'mailto:afifjamhari99@gmail.com',
};

const projects = [
  {
    title: 'Project Will Come Soon ',
    subtitle: '',
    href: '#',
    image: {
      src: 'https://img.freepik.com/free-psd/laptop-screen-mockup_171918-185.jpg?w=1800&t=st=1706336897~exp=1706337497~hmac=c6e49b49ce2f94c3de0e30137aafa4f4afe3236dc4a430d9e490cab66cd54f46',
      alt: 'Tech Design Image',
    },
  },
  {
    title: 'Soon',
    subtitle: '',
    href: '#',
    image: {
      src: 'https://img.freepik.com/free-vector/landing-page-with-laptop_52683-28586.jpg?t=st=1706336871~exp=1706337471~hmac=0b4b049f8d8566774c478ffff70c2c00db1ee1e98cf7c42a84a1a11a015c1555',
      alt: 'Art and Music Poster Image',
    },
  },
  /* 
  {
    title: 'E-commerce website redesign for fashion brand',
    subtitle: 'E-commerce website redesign for fashion brand',
    href: '#',
    image: {
      src: 'https://img.freepik.com/free-vector/gradient-responsive-website-design_23-2149496034.jpg?w=1800&t=st=1706336968~exp=1706337568~hmac=11aeda972ef2d7d82eb0cb7d67b01cc4d20fdb62406f87edbd1501b94b2714b8',
      alt: 'Fashion e-commerce Image',
    },
  }, */
];

export { projects, ctaLink, headerData, footerData };
