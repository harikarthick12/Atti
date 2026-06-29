import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Briefcase, Globe } from "lucide-react";

export const SOCIAL_LINKS = {
  instagram: "", // TODO: insert real Instagram URL
  linkedin: "", // TODO: insert real LinkedIn URL
  twitter: "", // TODO: insert real Twitter URL
};

export default function Footer() {
  return (
    <footer className="bg-dark text-accent py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <Link href="/" className="flex items-center gap-3 mb-6">
          <div className="relative w-16 h-16 bg-accent rounded-full p-2">
            <Image
              src="/globe.svg"
              alt="Atti Community Logo"
              fill
              className="object-contain p-2"
            />
          </div>
          <span className="font-bold text-3xl tracking-tight">Atti</span>
        </Link>
        
        <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg text-accent/90">
          Your friendly neighbour ❤️ from the community
        </p>

        <div className="flex gap-6 mb-12">
          <a href="mailto:attiofficial.in@gmail.com" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-highlight hover:text-dark transition-all">
            <Mail size={20} />
          </a>
          
          {SOCIAL_LINKS.instagram ? (
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-highlight hover:text-dark transition-all" title="Instagram">
              <MessageCircle size={20} />
            </a>
          ) : (
            <span className="w-12 h-12 rounded-full bg-accent/5 text-accent/30 flex items-center justify-center cursor-not-allowed" title="Instagram - Coming Soon">
              <MessageCircle size={20} />
            </span>
          )}

          {SOCIAL_LINKS.linkedin ? (
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-highlight hover:text-dark transition-all" title="LinkedIn">
              <Briefcase size={20} />
            </a>
          ) : (
            <span className="w-12 h-12 rounded-full bg-accent/5 text-accent/30 flex items-center justify-center cursor-not-allowed" title="LinkedIn - Coming Soon">
              <Briefcase size={20} />
            </span>
          )}
          
          {SOCIAL_LINKS.twitter ? (
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-highlight hover:text-dark transition-all" title="Twitter">
              <Globe size={20} />
            </a>
          ) : (
            <span className="w-12 h-12 rounded-full bg-accent/5 text-accent/30 flex items-center justify-center cursor-not-allowed" title="Twitter - Coming Soon">
              <Globe size={20} />
            </span>
          )}
        </div>
        
        <div className="w-full h-px bg-accent/20 mb-8 max-w-2xl" />

        <p className="text-sm text-accent/60">
          © {new Date().getFullYear()} Atti Community. All rights reserved.
        </p>
      </div>

      {/* Decorative large logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none blur-sm select-none">
        <span className="text-[30vw] font-black leading-none">Atti</span>
      </div>
    </footer>
  );
}
