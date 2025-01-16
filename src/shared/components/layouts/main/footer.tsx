// components/Footer.tsx
import Link from "next/link";
import { Divider } from "antd";

const Footer = () => {
  return (
    <footer className="mx-auto py-10 mt-10">
      <Divider className="dark:bg-slate-100" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:underline">
                Changelog
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-bold mb-4">Support my work</h3>
          <p className="mb-4">If you like my work, consider buying me a coffee!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
