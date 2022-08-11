import { useHover } from "@/hooks";
import { useRef } from "react";

interface ImageVideoProps {
  image?: string;
  video?: string;
}

interface VideoProps {
  src?: string;
}

function Video(props: VideoProps) {
  const { src } = props;
  const ref = useRef<HTMLVideoElement>(null);
  useHover(
    ref,
    () => ref.current?.play(),
    () => {
      const node = ref.current;
      if (!node) return;
      node.pause();
      node.currentTime = 0;
    }
  );
  return <video ref={ref} src={src} muted loop />;
}

export function ImageVideo(props: ImageVideoProps) {
  const { image, video } = props;
  return image ? <img src={image} /> : <Video src={video} />;
}
