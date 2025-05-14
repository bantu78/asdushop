import { socialLinks } from "@/app/data";

 
export default function SocialLink(){
    return(
        <div className="flex items-center gap-3 justify-center">
           {socialLinks.map((link:any) => (
        <button
          key={link.id} // React needs a unique key for list items
          className="p-1 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white   text-center rounded-full relative mt-4"
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${link.altText}`} // Added aria-label for accessibility
          >
            <img
              src={link.imgSrc}
              width="20"
              height="20"
              alt={link.altText}
            />
          </a>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      ))}
      </div>
    )
}