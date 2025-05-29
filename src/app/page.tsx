
import Hero  from "@/components/sections/Hero";
import  Services  from "@/components/sections/Services";
import  Testimonials  from "@/components/sections/Testimonials";
import Opiniones from "@/components/sections/Opiniones";
import Coverage  from "@/components/sections/Coverage";
import  FAQ  from "@/components/sections/FAQ";
import  Contact  from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {FloatingCallButton} from "@/components/ui/FloatingCallButton";
import { Metadata } from "next";
import { FALLBACK_SEO } from "@/config/constants";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title:  FALLBACK_SEO.title,
      description: FALLBACK_SEO.description,
      keywords: FALLBACK_SEO.keywords,
      robots: "index, follow",
      alternates: {
        canonical:  FALLBACK_SEO.canonical,
      },
      openGraph: {
        title:  FALLBACK_SEO.openGraph.title,
        description: FALLBACK_SEO.openGraph.description,
        images: [{
          url: FALLBACK_SEO.openGraph.images[0].url,
        }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: FALLBACK_SEO.twitter.title,
        description: FALLBACK_SEO.twitter.description,
        images: [{
          url: FALLBACK_SEO.openGraph.images[0].url,
        }],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return FALLBACK_SEO;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido principal */}
      <main className="flex-grow "> 
     <Hero></Hero>
     <Services></Services>
     <Testimonials></Testimonials>
     <Coverage></Coverage>
     <Opiniones></Opiniones>
     <FAQ></FAQ>
      <Contact></Contact>

      </main>
      
      {/* Footer */}
 <Footer></Footer>
 <FloatingCallButton />
    </div>
  );
}