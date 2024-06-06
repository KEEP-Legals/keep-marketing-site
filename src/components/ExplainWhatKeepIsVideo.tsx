import { Container } from '@/components/Container'

export function ExplainWhatKeepIsVideo() {
  return (
    <Container>
      <figure className="py-2 md:p-16">
        <video
          controls
          autoPlay
          loop
          playsInline
          preload="meta"
          width="100%"
          height="auto"
          src="/videos/how-it-works-keep-animation.mp4"
        >
          Your browser does not support the video tag
        </video>
      </figure>
    </Container>
  )
}
