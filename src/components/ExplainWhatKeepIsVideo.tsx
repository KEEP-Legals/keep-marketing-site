import { Container } from '@/components/Container'

export function ExplainWhatKeepIsVideo() {
  return (
    <video
      className="z-100 relative top-0 w-full"
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
