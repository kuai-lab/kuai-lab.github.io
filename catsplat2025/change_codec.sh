# #!/bin/bash

# # Directory containing the video files
# VIDEO_DIR="./static/videos/acid"

# # Navigate to the directory
# cd "$VIDEO_DIR"

# # Loop through all .mp4 files in the directory
# for file in *.mp4; do
#   # Define the new file name by prepending 'new' to the original file name
#   newfile="new_${file}"

#   # Command to convert the video file to use the H.264 codec
#   ffmpeg -i "$file" -vcodec libx264 -crf 23 -preset fast "$newfile"

#   echo "Converted $file to $newfile"
# done

# echo "All files have been converted."



#!/bin/bash

# Directory containing the .mov files
DIRECTORY="./static/videos/re10k"

# Change to the directory with the video files
cd "$DIRECTORY"

# Find all .mov files and convert them to .mp4 with H.264 codec
for file in *.mov; do
  # Extract the base name for the file to append the new extension
  base_name=$(basename "$file" .mov)

  # Define the new file name with .mp4 extension
  new_file="${base_name}.mp4"

  # Command to convert the file using FFmpeg
  ffmpeg -i "$file" -c:v libx264 -crf 23 -preset fast -c:a aac -b:a 192k "$new_file"

  echo "Converted $file to $new_file"
done

echo "Conversion complete for all files."

