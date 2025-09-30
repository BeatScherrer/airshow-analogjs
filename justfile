default:
  just -l

dev:
    pnpm start --host

fix-video input_video_name:
  # Use FFmpeg to create a scrub-friendly video
  ffmpeg -i {{input_video_name}}.mp4 -vcodec libx264 -g 1 -keyint_min 1 -sc_threshold 0 -b:v 5M {{input_video_name}}_keyframes.mp4

video-transform-mp4 input_video_name:
   # ffmpeg -i {{input_video_name}}.mkv -vcodec libx264 -acodec aac {{input_video_name}}.mp4
   ffmpeg -i {{input_video_name}}.mkv -c copy {{input_video_name}}.mp4

