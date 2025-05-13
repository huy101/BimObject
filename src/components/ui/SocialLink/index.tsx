import type React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaPinterest, FaTiktok, FaGithub, FaDribbble } from 'react-icons/fa';

// Map of social media platforms to their respective icons
const socialIcons: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  pinterest: FaPinterest,
  tiktok: FaTiktok,
  github: FaGithub,
  dribbble: FaDribbble,
};

export interface SocialLinks {
  platform: keyof typeof socialIcons | string;
  url: string;
  customIcon?: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLinks[];
  iconSize?: number;
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  iconColor?: string;
  hoverIconColor?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  padding?: string;
  gap?: string;
  external?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  iconSize = 20,
  className = '',
  linkClassName = '',
  iconClassName = '',
  backgroundColor = 'white',
  hoverBackgroundColor = 'gray-200',
  iconColor = 'black',
  hoverIconColor,
  rounded = 'full',
  padding = '2',
  gap = '4',
  external = false,
}) => {
  // Generate the link class based on props
  const getLinkClass = () => {
    return `rounded-${rounded} bg-${backgroundColor} p-${padding} text-${iconColor} transition-colors hover:bg-${hoverBackgroundColor} ${hoverIconColor ? `hover:text-${hoverIconColor}` : ''} ${linkClassName}`;
  };

  // Determine the component to use for the link
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <div className={`flex gap-${gap} ${className}`}>
      {links.map((link, index) => {
        // Get the icon component for this platform
        let IconComponent = null;
        let icon = null;

        if (link.customIcon) {
          // Use custom icon if provided
          icon = link.customIcon;
        } else if (typeof link.platform === 'string' && link.platform in socialIcons) {
          // Use predefined icon if platform is recognized
          IconComponent = socialIcons[link.platform as keyof typeof socialIcons];
          icon = <IconComponent size={iconSize} className={iconClassName} />;
        } else {
          // Fallback for unknown platforms
          return null;
        }

        return (
          <LinkComponent
            key={index}
            to={link.url}
            href={external ? link.url : undefined}
            aria-label={`${link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}`}
            className={getLinkClass()}
            {...linkProps}
          >
            {icon}
          </LinkComponent>
        );
      })}
    </div>
  );
};
