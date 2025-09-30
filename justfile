default:
  just -l

dev:
    pnpm start --host

fix-video input_video_path:
  # Use FFmpeg to create a scrub-friendly video
  ffmpeg -i {{input_video_path}} -vcodec libx264 -g 1 -keyint_min 1 -sc_threshold 0 -b:v 5M output.mp4
