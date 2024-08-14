import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNavBar } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import AboutMe from "@/components/AboutMe";


export default function Home() {
  
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full" >
        <FloatingNavBar className="" navItems={navItems} />
        <Hero/>
        <AboutMe />
        <RecentProjects />
        <Grid />
        
        
        <Footer />
      </div>
    </main>
  );
}
