# DATA_TYPES=(stump  treehill counter  flowers bicycle  bonsai garden  kitchen  room)

# for DATA_TYPE in "${DATA_TYPES[@]}"
# do
#     ffmpeg -i /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/GT/MipNeRF360_/${DATA_TYPE}.mp4 -vcodec libx264 -acodec aac /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/GT/MipNeRF360/${DATA_TYPE}.mp4

#     ffmpeg -i /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/Watermarking/MipNeRF360_/${DATA_TYPE}.mp4 -vcodec libx264 -acodec aac /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/Watermarking/MipNeRF360/${DATA_TYPE}.mp4
# done


# DATA_TYPES=(fern flower fortress horns leaves orchids room trex)

# for DATA_TYPE in "${DATA_TYPES[@]}"
# do
#     ffmpeg -i /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/GT/LLFF_/${DATA_TYPE}.mp4 -vcodec libx264 -acodec aac /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/GT/LLFF/${DATA_TYPE}.mp4

#     ffmpeg -i /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/Watermarking/LLFF_/${DATA_TYPE}.mp4 -vcodec libx264 -acodec aac /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/Watermarking/LLFF/${DATA_TYPE}.mp4
# done

DATA_TYPES=(chair  drums ficus  hotdog lego  materials mic ship)

for DATA_TYPE in "${DATA_TYPES[@]}"
do
    ffmpeg -i /home/jang/cvpr2025_3dgsw/rendering_carmera_path/gt/Blender/${DATA_TYPE}.mp4 -vcodec libx264 -acodec aac /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/GT/Blender/${DATA_TYPE}.mp4

    ffmpeg -i /home/jang/cvpr2025_3dgsw/rendering_carmera_path/watermarked/Blender/${DATA_TYPE}.mp4 -vcodec libx264 -acodec aac /home/jang/project_page/kuai-lab.github.io/cvpr2025-3dgsw/RENDERING_RESULTS/Watermarking/Blender/${DATA_TYPE}.mp4
done