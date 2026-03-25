  // 모든 슬라이더에 대해 공통 동작 설정
  document.querySelectorAll('[data-slider]').forEach((slider) => {
    const leftVideo = slider.querySelector('.left-video');
    const rightVideo = slider.querySelector('.right-video');
    const sliderBar = slider.querySelector('.slider-bar');
    const sliderDivider = slider.querySelector('.slider-divider');

    // 슬라이더 동작 처리
    slider.addEventListener('mousemove', (e) => handleSliderMove(e, slider, sliderBar, sliderDivider));
    slider.addEventListener('touchmove', (e) => handleSliderMove(e, slider, sliderBar, sliderDivider));

    const forcePaused = slider.closest('#proto-mipnerf360, #proto-llff') !== null;

    if (forcePaused) {
      const freeze = () => {
        if (leftVideo) {
          leftVideo.pause();
          leftVideo.currentTime = 0;
        }
        if (rightVideo) {
          rightVideo.pause();
          rightVideo.currentTime = 0;
        }
      };

      // Keep Mip-NeRF360 / LLFF clips paused regardless of browser autoplay behavior.
      if (leftVideo) {
        leftVideo.removeAttribute('autoplay');
        leftVideo.addEventListener('play', () => leftVideo.pause());
      }
      if (rightVideo) {
        rightVideo.removeAttribute('autoplay');
        rightVideo.addEventListener('play', () => rightVideo.pause());
      }

      freeze();
      return;
    }

    // 비디오 재생/정지 동작
    slider.addEventListener('click', () => {
      if (leftVideo.paused) {
        leftVideo.play();
        rightVideo.play();
      } else {
        leftVideo.pause();
        rightVideo.pause();
      }
    });
  });

  // 슬라이더 위치 조정 함수
  function handleSliderMove(event, slider, sliderBar, sliderDivider) {
    const rect = slider.getBoundingClientRect();
    const xPos = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    const position = ((xPos - rect.left) / slider.offsetWidth) * 100;

    if (position >= 0 && position <= 100) {
      sliderBar.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
      sliderDivider.style.left = `${position}%`;
    }
  }