import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin} from 'lucide-react';

const linkStyle = "text-white hover:text-blue-400 font-medium transition-colors flex items-center justify-center w-12 h-12 rounded-full bg-[#b91f24]";
const iconStyle = "size={48}";

export default function FollowOurJourney() {
  return (
    <div className="bg-[#0a1a3b] px-8 py-6 w-full">
    <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-4">
        <h2 className="flex text-3xl font-semibold text-white ">Follow Our Journey</h2>
    <nav className="flex gap-8">
      <Link href="https://www.instagram.com/g7g20youthjapan/" 
        target="_blank"
        rel = "noopener noreferrer"
        className={linkStyle}>
          <Instagram className={iconStyle}/></Link> 
      <Link href="https://www.facebook.com/G7G20YouthJapan/"
        target="_blank"
        rel = "noopener noreferrer"
        className={linkStyle}>
          <Facebook className={iconStyle}/></Link>
      <Link href="https://twitter.com/g7g20youthjapan?lang=en"
        target="_blank"
        rel = "noopener noreferrer" 
        className={linkStyle}>
        <Twitter className={iconStyle}/></Link> 
      <Link href="https://www.linkedin.com/company/g7-g20-youth-japan/" 
        target="_blank"
        rel = "noopener noreferrer"
        className={linkStyle}>
          <Linkedin className={iconStyle}/></Link>
    </nav>
    </div>
    </div>
  );
}