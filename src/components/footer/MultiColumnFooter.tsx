import { EarthIcon, FacebookIcon, Link, LinkedinIcon, TwitterIcon } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    link: '/',
    icon: <LinkedinIcon className="size-6" />,
  },
  {
    name: 'X',
    link: '/',
    icon: <TwitterIcon className="size-6" />,
  },
  {
    name: 'Facebook',
    link: '/',
    icon: <FacebookIcon className="size-6" />,
  },
  {
    name: 'Website',
    link: 'https://saboka-diriba.netlify.app/',
    icon: <EarthIcon className="size-6" />,
  },
]


const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="bg-mid">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-5 md:flex-row md:justify-between">
          <p className="text-center text-[#767E94]">
            Shopping Online © 2025. <span className="text-white">SaboTeck</span>
          </p>
        
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-[#767E94] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
