import React from 'react';

const SocialIcons = () => {
  const gmail = './src/assets/social_logos/gmail.svg'; // Path to Gmail icon

  const socials = [
    { id: 1, title: 'LinkedIn', img: './src/assets/social_logos/linkedin.svg', link: 'https://www.linkedin.com/in/achira-silva/' }, 
    { id: 2, title: 'Behance', img: './src/assets/social_logos/behance.svg', link: 'https://www.behance.net/achira_silva' },  
    { id: 3, title: 'Instagram', img: './src/assets/social_logos/instagram.svg', link: '' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Gmail Icon */}
      <p className="font-caveat text-2xl font-semibold text-color-primary  mb-4 md:text-3xl">
        Send me an Email
      </p>
      <a href="mailto:achira.sanjana@gmail.com">
        <img src={gmail} alt="achira.sanjana@gmail.com" className="mb-4 w-12 h-12" /> 
      </a>

      <p className="font-caveat font-semibold text-2xl text-color-primary mb-4 md:text-3xl">
        Follow me on Social Media
      </p>

      <div className="flex space-x-6 w-full">
        {socials.map(({ id, title, img, link }) => (
          <a href={link} key={id} aria-label={title} className="hover:scale-110 transform transition-transform" target='_blank'>
            <img src={img} alt={title} className="w-12 h-12 rounded-lg border border-card-primary-border" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
