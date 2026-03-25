import { useState, useRef, useCallback } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MessageCircle,
  Play,
  Clock,
  ChevronDown,
  Video,
} from "lucide-react";

interface Video {
  id: string;
  title: string;
  topic: string;
  src: string;
  instagramUrl: string;
  durationLabel: string;
  featured?: boolean;
  orientation?: "landscape" | "portrait";
  poster?: string;
}

const videos: Video[] = [
  { id: "dmn0i6oi4kc", title: "Contenuto originale Instagram", topic: "Relazioni", src: "/videos/dmn0i6oi4kc.mp4", instagramUrl: "https://www.instagram.com/p/DMN0i6oI4Kc/", durationLabel: "1 min" },
  { id: "dj9rlsnplcd", title: "Intervento audio originale", topic: "Approfondimenti", src: "/videos/dj9rlsnplcd.mp4", instagramUrl: "https://www.instagram.com/reel/DJ9rlSNplcD/", durationLabel: "6 min", featured: true, orientation: "landscape", poster: "/videos/dj9rlsnplcd-poster.jpg" },
  { id: "ca-ayokvywh", title: "Autostima e relazioni", topic: "Autostima", src: "/videos/ca-ayokvywh.mp4", instagramUrl: "https://www.instagram.com/reel/Ca-aYoKvYWH/", durationLabel: "15 sec" },
  { id: "cakxj-sokmz", title: "Crescita personale e consapevolezza", topic: "Crescita personale", src: "/videos/cakxj-sokmz.mp4", instagramUrl: "https://www.instagram.com/reel/Cakxj-sokmz/", durationLabel: "18 sec" },
  { id: "czppjdtjvvw", title: "Confini emotivi", topic: "Relazioni", src: "/videos/czppjdtjvvw.mp4", instagramUrl: "https://www.instagram.com/reel/CZpPjdTJvvw/", durationLabel: "10 sec" },
  { id: "czkgb8cgxit", title: "Segnali da non ignorare", topic: "Dipendenza affettiva", src: "/videos/czkgb8cgxit.mp4", instagramUrl: "https://www.instagram.com/reel/CZkGb8cgXIT/", durationLabel: "10 sec" },
  { id: "czhtm4cbpsh", title: "Approfondimento da ascoltare con calma", topic: "Approfondimenti", src: "/videos/czhtm4cbpsh.mp4", instagramUrl: "https://www.instagram.com/reel/CZhtm4CBpSh/", durationLabel: "49 min", featured: true },
  { id: "cyunwhthaqp", title: "Emozioni intense", topic: "Emozioni", src: "/videos/cyunwhthaqp.mp4", instagramUrl: "https://www.instagram.com/reel/CYuNWHthAqp/", durationLabel: "7 sec", poster: "/videos/cyunwhthaqp-poster.jpg" },
  { id: "cyrpykxht1v", title: "Autostima e crescita personale", topic: "Autostima", src: "/videos/cyrpykxht1v.mp4", instagramUrl: "https://www.instagram.com/reel/CYrpYkXht1v/", durationLabel: "52 min", featured: true },
  { id: "cyjr3_obwj4", title: "Rileggere una dinamica che fa soffrire", topic: "Relazioni", src: "/videos/cyjr3_obwj4.mp4", instagramUrl: "https://www.instagram.com/reel/CYjr3_oBwJ4/", durationLabel: "23 sec" },
  { id: "cwtk2ronx-s", title: "Quando fai troppo per l'altro", topic: "Dipendenza affettiva", src: "/videos/cwtk2ronx-s.mp4", instagramUrl: "https://www.instagram.com/reel/CWtK2RONx-s/", durationLabel: "13 sec" },
  { id: "cunhi-hoynt", title: "Restare in contatto con sé", topic: "Autostima", src: "/videos/cunhi-hoynt.mp4", instagramUrl: "https://www.instagram.com/reel/CUnHi-Hoynt/", durationLabel: "28 sec" },
  { id: "cucqr4joei1", title: "Imparare a fermarsi", topic: "Benessere psicologico", src: "/videos/cucqr4joei1.mp4", instagramUrl: "https://www.instagram.com/reel/CUCqR4joEI1/", durationLabel: "36 sec" },
];

const landscapeVideo = videos.find((v) => v.orientation === "landscape");
const shortVideos = videos.filter(
  (v) => !v.featured && v.orientation !== "landscape"
);
const featuredVertical = videos.filter(
  (v) => v.featured && v.orientation !== "landscape"
);

function VideoCard({ video, aspect = "portrait" }: { video: Video; aspect?: "portrait" | "landscape" }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-elevated transition-shadow">
      <div
        className={`relative bg-black ${
          aspect === "landscape" ? "aspect-video" : "aspect-[3/4]"
        }`}
      >
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls={isPlaying}
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
            aria-label="Riproduci video"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-foreground ml-1" />
            </div>
          </button>
        )}
        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.durationLabel}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
          {video.topic}
        </span>
        <h3 className="font-serif text-foreground font-medium leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
}

const Instagram = () => {
  const [showAllShorts, setShowAllShorts] = useState(false);
  const visibleShorts = showAllShorts ? shortVideos : shortVideos.slice(0, 6);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-warm-blush">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground">
              I miei contenuti video
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pillole, approfondimenti e riflessioni su relazioni, emozioni e crescita personale.
              Contenuti gratuiti per iniziare a prenderti cura di te.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Landscape featured video */}
      {landscapeVideo && (
        <section className="section-padding bg-background">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-foreground mb-6 text-center">
              In evidenza
            </h2>
            <VideoCard video={landscapeVideo} aspect="landscape" />
          </div>
        </section>
      )}

      {/* Short videos */}
      <section className="section-padding bg-secondary/40">
        <div className="container-wide">
          <h2 className="text-2xl font-serif text-foreground mb-8 text-center">
            Pillole brevi
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {visibleShorts.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          {!showAllShorts && shortVideos.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllShorts(true)}
                className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity"
              >
                Mostra tutti
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured long vertical videos */}
      {featuredVertical.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-foreground mb-8 text-center">
              Approfondimenti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredVertical.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl font-serif text-foreground">
              Vuoi fare il prossimo passo?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3">
              I video possono ispirarti, ma un percorso personalizzato può
              davvero cambiarti la vita. Scrivimi per un primo colloquio
              conoscitivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/393515499417?text=Buongiorno%20Dott.ssa%20Golino,%20ho%20visto%20i%20suoi%20video%20e%20vorrei%20informazioni%20per%20un%20primo%20colloquio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Scrivimi su WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ilariagolino.psico/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-2xl font-medium hover:bg-secondary transition-colors shadow-soft border border-border/50"
              >
                <Video className="w-5 h-5" />
                Seguimi su Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Instagram;
