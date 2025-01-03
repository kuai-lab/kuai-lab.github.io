from moviepy.editor import VideoFileClip

def convert_and_resize_mov_to_mp4(input_path, output_path, new_width=None):
    try:
        # .mov 파일 열기
        clip = VideoFileClip(input_path)
        
        # 비디오의 너비를 넓히는 작업
        if new_width:
            aspect_ratio = clip.h / clip.w  # 원본의 가로세로 비율 유지
            clip = clip.resize(width=new_width)  # 새 너비로 크기 변경
            
        # .mp4 파일로 저장
        clip.write_videofile(output_path, codec="libx264")
        print(f"변환 및 크기 조정 완료: {output_path}")
    except Exception as e:
        print(f"에러 발생: {e}")

# 사용 예시: 너비를 1920으로 설정
convert_and_resize_mov_to_mp4("qualitative/video1.mov", "qualitative/video1.mp4", new_width=1920)
