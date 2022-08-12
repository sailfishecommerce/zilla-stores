import socialIconLinks from "@/json/social-icon-links.json";

interface Props {
  className: "bs-dark" | "bs-light";
}

export default function SocialIcon({ className }: Props) {
  return (
    <div className="widget widget-light pb-2 mb-4">
      <h3 className="widget-title text-light">Follow us</h3>
      {socialIconLinks.map((link) => (
        <a
          key={link.link}
          href={link.link}
          className={`btn-social ${className} bs-${link.name} me-2 mb-2`}
          rel="noreferrer"
          target="_blank"
        >
          <i className={`ci-${link.name}`}></i>
        </a>
      ))}
    </div>
  );
}
