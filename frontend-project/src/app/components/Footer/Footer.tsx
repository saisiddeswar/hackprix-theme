'use client'
import Typography from "@material-tailwind/react/components/Typography";

const LINKS = [
  {
    title: "Startups",
    items: ["Browse Startups", "Apply to List", "Success Stories", "Resources"],
  },
  {
    title: "Investors",
    items: ["Find Startups", "Investment Guide", "Events", "FAQ"],
  },
  {
    title: "Company",
    items: ["About Us", "Careers", "Contact", "Press"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-white to-pink-50 border-t border-pink-100">
      <div className="mx-auto w-full max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 justify-between gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <Typography 
              variant="h3" 
              className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-['Poppins']"
            >
              StartupConnect
            </Typography>
            <Typography className="text-xl text-gray-600 font-['Inter'] max-w-md">
              Bridging the gap between innovative startups and visionary investors worldwide.
            </Typography>
            <div className="flex gap-6 pt-4">
              {[
                { icon: "facebook", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
             
                { icon: "twitter", path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                { icon: "github", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
                { icon: "linkedin", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
              ].map((social) => (
                <a 
                  key={social.icon}
                  href="#" 
                  className="p-2 text-pink-500 hover:text-purple-600 transition-colors duration-300"
                  aria-label={social.icon}
                >
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-10">
            {LINKS.map(({ title, items }) => (
              <div key={title} className="space-y-4">
                <Typography
                  variant="h5"
                  className="text-xl font-bold text-gray-800 font-['Inter']"
                >
                  {title}
                </Typography>
                <ul className="space-y-3">
                  {items.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-lg text-gray-600 hover:text-pink-500 transition-colors duration-300 font-['Inter']"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex w-full flex-col items-center justify-center border-t border-pink-100 pt-8 md:flex-row md:justify-between">
          <Typography
            variant="paragraph"
            className="mb-4 text-center text-lg text-gray-600 md:mb-0 font-['Inter']"
          >
            &copy; {currentYear} StartupConnect. All rights reserved.
          </Typography>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a 
                key={item}
                href="#"
                className="text-lg text-gray-600 hover:text-pink-500 transition-colors duration-300 font-['Inter']"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}