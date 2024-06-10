import { Container } from '@/components/Container'

export function ExplainWhatKeepIsVideo() {
  return (
    <video
      className="z-100 bg-video-background max-h-[calc(90vh] relative top-0 w-full max-h-[calc(100vh-330px)] object-contain"
      autoPlay
      loop
      muted
      playsInline
      src="/videos/how-it-works-keep-animation.mp4"
    >
      Your browser does not support the video tag
    </video>
  )
}
