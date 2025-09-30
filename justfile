asset_dir := "public"
asset_clinic_mover := "{{asset_dir}}/clinic_mover"

default:
  just -l

dev:
    pnpm start --host

fix-video input:
  #!/usr/bin/env bash
  # Use FFmpeg to create a scrub-friendly video
  ffmpeg -i "{{input}}" -vcodec libx264 -g 1 -keyint_min 1 -sc_threshold 0 -b:v 5M -- "$(basename {{input}}_keyframes)".mp4

video-transform-mp4 input:
  #!/usr/bin/env bash
   # ffmpeg -i {{input}}.mkv -vcodec libx264 -acodec aac $(basename {{input}}).mp4
   ffmpeg -i "{{input}}" -c copy -- "$(basename {{input}}).mp4"

