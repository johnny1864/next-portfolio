import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNavBar } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";


export default function Home() {
  const navItems = [
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Projects',
      link: '#projects'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full" >
        <FloatingNavBar className="" navItems={navItems} />
        <Hero/>
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
