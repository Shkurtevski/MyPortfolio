interface SocialLinks {
  href: string;
  imgSrc: string;
  altText: string;
}

interface Props {
  socialLinks: SocialLinks[];
}

const SocialLink = ({ socialLinks }: Props) => {
  return (
    <div className="social-icon">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.imgSrc} alt={link.altText} />
        </a>
      ))}
    </div>
  );
};

export default SocialLink;
