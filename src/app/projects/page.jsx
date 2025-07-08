import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

const projectList = [
  {
    title: "Password Generator",
    href: "https://password-generator-theta-self.vercel.app/",
    description: "Siz hohlagan talablarga binoan pin-kod tuzib beruvchi sayt",
  },
  {
    title: "Audiophile",
    href: "https://audiophile-olive-psi.vercel.app/",
    description: "Elektronika onlayn do'koni",
  },
  {
    title: "Designo",
    href: "https://first-exam-dusky.vercel.app/",
    description: "Proffesional dizaynerlar uchun maxsus sayt",
  },
  {
    title: "food",
    href: "https://10-dars-fn37.vercel.app/",
    description: "Food restorani sayti",
  },
];

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-lg mx-auto px-5">
        <ul className="flex flex-col gap-10">
          {projectList.map(({ description, href, title }) => {
            return (
              <li key={title}>
                <h3 className="font-medium text-xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                  className={buttonVariants({ variant: "secondary" })}
                  href={href}
                  target="_blank"
                >
                  <Link />
                  Ko'rish
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
