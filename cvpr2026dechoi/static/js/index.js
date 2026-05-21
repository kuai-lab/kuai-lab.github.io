  document.addEventListener('DOMContentLoaded', function () {
    /* 1. Video Results slider */
    const mainSection = document.getElementById('main-video-section');
    const mainGrid = document.getElementById('main-video-grid');

    const mainSceneList = [
      {
        caption: '"Lift the clothesstand, move the clothesstand, and put down the clothesstand."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_1.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_1.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_1.mp4' }
        ]
      },
      {
        caption: '"Push the largebox, and set it back down."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_2.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_2.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_2.mp4' }
        ]
      },
      {
        caption: '"Pull the largetable, and set it back down."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_3.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_3.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_3.mp4' }
        ]
      },
      {
        caption: '"Lift the plasticbox, move the plasticbox, and put down the plasticbox."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_4.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_4.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_4.mp4' }
        ]
      },
      {
        caption: '"Lift the trashcan, move the trashcan, and put down the trashcan."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_5.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_5.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_5.mp4' }
        ]
      },
      {
        caption: '"Put your hand on the back of the whitechair, pull the whitechair, and set it back down."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_6.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_6.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_6.mp4' }
        ]
      },
      {
        caption: '"Lift the monitor, rotate the monitor."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_7.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_7.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_7.mp4' }
        ]
      },
      {
        caption: '"Kick the smallbox, and set it back down."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_8.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_8.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_8.mp4' }
        ]
      },
      {
        caption: '"Lift the suitcase, rotate the suitcase, and set it back down."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_9.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_9.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_9.mp4' }
        ]
      },
      {
        caption: '"Lift the tripod, move the tripod, and put down the tripod."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_10.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_10.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_10.mp4' }
        ]
      },
      {
        caption: '"Facing the back of the woodchair, lift the woodchair, move the woodchair, and then place the woodchair on the floor."',
        videos: [
          { method: 'CHOIS',   file: 'static/videos/CHOIS_11.mp4' },
          { method: 'HOIFHLI', file: 'static/videos/HOIFHLI_11.mp4' },
          { method: 'DecHOI',  file: 'static/videos/DecHOI_11.mp4' }
        ]
      }
    ];

    // 씬 블록 생성
    mainSceneList.forEach(function (scene) {
      const sceneBlock = document.createElement('div');
      sceneBlock.className = 'scene-block';

      const caption = document.createElement('div');
      caption.className = 'video-hand-caption';
      caption.textContent = scene.caption;

      const row = document.createElement('div');
      row.className = 'scene-video-row';

      scene.videos.forEach(function (v) {
        const item = document.createElement('div');
        item.className = 'video-item';

        const videoEl = document.createElement('video');
        videoEl.src = v.file;
        // videoEl.controls = true;
        videoEl.muted = true;
        videoEl.loop = true;
        videoEl.playsInline = true;

        const methodLabel = document.createElement('div');
        methodLabel.className = 'video-caption';
        if (v.method === 'DecHOI') {
          const strong = document.createElement('strong');
          strong.textContent = v.method;
          methodLabel.appendChild(strong);
        } else {
          methodLabel.textContent = v.method;
        }

        item.appendChild(videoEl);
        item.appendChild(methodLabel);
        row.appendChild(item);
      });

      sceneBlock.appendChild(caption);
      sceneBlock.appendChild(row);
      mainGrid.appendChild(sceneBlock);
    });

    const mainScenes = Array.from(mainGrid.querySelectorAll('.scene-block'));
    const mainPageSize = 1;
    let mainPage = 0;
    const mainTotalPages = Math.ceil(mainScenes.length / mainPageSize);

    const mainPrevBtn = document.getElementById('videoPrev');
    const mainNextBtn = document.getElementById('videoNext');
    const mainPageInfo = document.getElementById('videoPageInfo');

    function renderMain() {
      // 일단 섹션 안 모든 비디오 멈추고 타임 리셋
      const allVideos = mainSection.querySelectorAll('video');
      allVideos.forEach(function (vid) {
        vid.pause();
        try {
          vid.currentTime = 0;
        } catch (e) {}
      });

      const start = mainPage * mainPageSize;
      const end = start + mainPageSize;
      const visibleVideos = [];

      mainScenes.forEach(function (scene, idx) {
        if (idx >= start && idx < end) {
          scene.style.display = 'block';
          scene.querySelectorAll('video').forEach(function (v) {
            visibleVideos.push(v);
          });
        } else {
          scene.style.display = 'none';
        }
      });

      if (mainPageInfo) {
        mainPageInfo.textContent = (mainPage + 1) + ' / ' + mainTotalPages;
      }
      mainPrevBtn.disabled = (mainPage === 0);
      mainNextBtn.disabled = (mainPage >= mainTotalPages - 1);

      // 현재 페이지 비디오 자동 재생
      visibleVideos.forEach(function (vid) {
        const p = vid.play();
        if (p && typeof p.then === 'function') {
          p.catch(function () {});
        }
      });
    }

    mainPrevBtn.addEventListener('click', function () {
      if (mainPage > 0) {
        mainPage -= 1;
        renderMain();
      }
    });

    mainNextBtn.addEventListener('click', function () {
      if (mainPage < mainTotalPages - 1) {
        mainPage += 1;
        renderMain();
      }
    });

    renderMain();


    /* 2. DynaPlan slider */
    const dynSection = document.getElementById('dynaplan-section');
    const dynGrid = document.getElementById('dynaplan-grid');

    const dynSceneList = [
      {
        videos: [
          { file: 'static/videos/DynaPlan_1.mp4' },
          { file: 'static/videos/DynaPlan_2.mp4' }
        ]
      },
      {
        videos: [
          { file: 'static/videos/DynaPlan_3.mp4' },
          { file: 'static/videos/DynaPlan_4.mp4' }
        ]
      }
    ];

    dynSceneList.forEach(function (scene) {
      const sceneBlock = document.createElement('div');
      sceneBlock.className = 'scene-block';

      const row = document.createElement('div');
      row.className = 'scene-video-row';

      scene.videos.forEach(function (v) {
        const item = document.createElement('div');
        item.className = 'video-item';

        const videoEl = document.createElement('video');
        videoEl.src = v.file;
        videoEl.controls = true;
        videoEl.muted = true;
        videoEl.loop = true;
        videoEl.playsInline = true;

        item.appendChild(videoEl);
        row.appendChild(item);
      });

      sceneBlock.appendChild(row);
      dynGrid.appendChild(sceneBlock);
    });

    const dynScenes = Array.from(dynGrid.querySelectorAll('.scene-block'));
    const dynPageSize = 1;
    let dynPage = 0;
    const dynTotalPages = Math.ceil(dynScenes.length / dynPageSize);

    const dynPrevBtn = document.getElementById('dynPrev');
    const dynNextBtn = document.getElementById('dynNext');
    const dynPageInfo = document.getElementById('dynPageInfo');

    function renderDyn() {
      const allVideos = dynSection.querySelectorAll('video');
      allVideos.forEach(function (vid) {
        vid.pause();
        try {
          vid.currentTime = 0;
        } catch (e) {}
      });

      const start = dynPage * dynPageSize;
      const end = start + dynPageSize;
      const visibleVideos = [];

      dynScenes.forEach(function (scene, idx) {
        if (idx >= start && idx < end) {
          scene.style.display = 'block';
          scene.querySelectorAll('video').forEach(function (v) {
            visibleVideos.push(v);
          });
        } else {
          scene.style.display = 'none';
        }
      });

      if (dynPageInfo) {
        dynPageInfo.textContent = (dynPage + 1) + ' / ' + dynTotalPages;
      }
      dynPrevBtn.disabled = (dynPage === 0);
      dynNextBtn.disabled = (dynPage >= dynTotalPages - 1);

      visibleVideos.forEach(function (vid) {
        const p = vid.play();
        if (p && typeof p.then === 'function') {
          p.catch(function () {});
        }
      });
    }

    dynPrevBtn.addEventListener('click', function () {
      if (dynPage > 0) {
        dynPage -= 1;
        renderDyn();
      }
    });

    dynNextBtn.addEventListener('click', function () {
      if (dynPage < dynTotalPages - 1) {
        dynPage += 1;
        renderDyn();
      }
    });

    renderDyn();

    const copyButton = document.querySelector('.copy-bibtex');
    if (copyButton) {
      copyButton.addEventListener('click', function () {
        const targetId = copyButton.getAttribute('data-copy-target');
        const target = document.getElementById(targetId);
        if (!target) {
          return;
        }

        const text = target.innerText;
        function setCopiedLabel() {
          copyButton.textContent = 'Copied';
          setTimeout(function () {
            copyButton.textContent = 'Copy';
          }, 1600);
        }

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(setCopiedLabel).catch(function () {});
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.setAttribute('readonly', '');
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            setCopiedLabel();
          } catch (e) {}
          document.body.removeChild(textarea);
        }
      });
    }
  });