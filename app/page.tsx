import { Mail, Music, Youtube } from "lucide-react"

export default function ArtistPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tighter animate-fade-in">0geid</h1>

        <div className="h-px w-24 bg-white/20 mx-auto my-8" />

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:0000geid"
            className="inline-flex items-center gap-2 text-xl hover:text-primary-300 transition-colors duration-300"
          >
            <Mail className="h-5 w-5" />
            <span>0000geid</span>
          </a>

          <a
            href="https://open.spotify.com/artist/2QS5TAkzODT4vzmqfo67Xf?si=sPb26uxCQsC4nCKSJxyvNQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl hover:text-green-400 transition-colors duration-300"
          >
            <Music className="h-5 w-5" />
            <span>Spotify</span>
          </a>

          <a
            href="https://music.youtube.com/watch?v=SgrX8I0orYI&si=RlVBFnWBzcsuqZ2p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl hover:text-red-500 transition-colors duration-300"
          >
            <Youtube className="h-5 w-5" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </main>
  )
}

