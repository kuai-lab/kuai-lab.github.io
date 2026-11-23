# 생성형 AI와 저작권 · GitHub Pages

PDF 미리보기, 새 탭 열기, 다운로드를 제공하는 정적 페이지입니다. 별도 설치나 빌드가 필요하지 않습니다.

## 파일 구성

```text
genai-copyright-pages/
├── index.html
├── 2026_genai_copyright.pdf
├── .nojekyll
├── README.md
└── assets/
    ├── style.css
    ├── branding.css    # 기관·과제 소개 배치
    ├── branding/       # 한국콘텐츠진흥원·고려대학교 공식 로고
    └── cover.png
```

## GitHub에 올리기

1. GitHub에서 새 저장소를 만듭니다. GitHub Free 계정이라면 **Public**을 선택합니다. 저장소 이름은 예를 들어 `genai-copyright`로 정합니다.
2. ZIP을 받았다면 먼저 압축을 풉니다. 저장소의 **Add file → Upload files**에서 이 폴더 **안의 파일들과 `assets` 폴더**를 올리고 커밋합니다. ZIP 자체나 바깥의 `genai-copyright-pages` 폴더를 올리지 마세요. 저장소 첫 화면에 `index.html`이 보여야 합니다.
3. `.nojekyll`도 함께 올립니다. Mac Finder에서 **⌘⇧.**을 누르면 숨김 파일이 보입니다. 누락했다면 GitHub의 **Add file → Create new file**에서 이름이 `.nojekyll`인 빈 파일을 추가합니다.
4. 저장소의 **Settings → Pages → Build and deployment**에서 아래 항목을 선택하고 **Save**를 누릅니다.
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. 배포가 끝나면 같은 화면의 **Visit site**로 접속합니다. 반영에는 최대 10분 정도 걸릴 수 있습니다. 보통 주소는 `https://사용자명.github.io/저장소명/` 형태입니다.

PDF는 약 **5.47 MiB**이며 GitHub 웹 업로드 한도인 파일당 25 MiB 이내입니다. `main` 대신 다른 브랜치에 올렸다면 4단계에서 그 브랜치를 선택하세요.

## 내 컴퓨터에서 확인하기

`index.html`을 더블클릭하면 브라우저에서 페이지를 볼 수 있습니다. 브라우저가 로컬 PDF 미리보기를 제한하면 **새 탭 열기**를 사용하세요.

Python 3가 설치되어 있다면, 선택적으로 이 폴더에서 아래 명령을 실행한 뒤 `http://localhost:8000`을 열어 확인할 수 있습니다. 종료는 **Ctrl+C**입니다.

```bash
python3 -m http.server 8000
```

## 내용 바꾸기

- **PDF 교체:** `2026_genai_copyright.pdf`를 같은 이름의 새 파일로 교체하고 업로드합니다. 파일명을 바꾸면 `index.html`의 PDF 링크와 미리보기 경로도 모두 수정합니다.
- **제목·설명:** `index.html`에서 화면 제목과 설명, `<title>`, `<meta name="description">` 및 소셜 공유 메타 정보를 함께 수정합니다. 페이지 수·파일 크기를 표시한 문구도 새 PDF에 맞춰 바꿉니다.
- **표지·디자인:** `assets/cover.png`를 교체하고, 색상·간격·글꼴은 `assets/style.css`에서 수정합니다.
- **경로 유지:** 파일 경로는 상대 경로를 사용하므로 프로젝트 저장소의 하위 주소에서도 작동합니다. 경로 앞에 `/`를 붙이거나 폴더 구조를 바꾸면 링크가 끊어질 수 있습니다.
- **모바일 열람:** 작은 화면에서는 **PDF 원문 열기** 버튼으로 문서를 별도로 엽니다. PC에서는 페이지 안에서 미리볼 수 있으며, **새 탭에서 열기**와 **다운로드**도 제공합니다.

## 기관 및 과제 표기

- 사업 주관: **한국콘텐츠진흥원**
- 연구 수행: **고려대학교 (고려대학교산학협력단)**
- 과제명: **생성형 AI 저작권 관리 및 보호 기술 개발을 위한 국제공동연구 및 글로벌 인재 양성**
- 과제번호: **RS-2024-00345025**

상단 기관·과제 소개와 하단 기관 정보를 반영했습니다. `assets/branding.css`에서 배치를 조정하며, 로고 원본은 `assets/branding/`에 포함되어 외부 이미지 서버 연결 없이 표시됩니다. 로고의 색상과 가로세로 비율을 유지합니다.

- 한국콘텐츠진흥원: [공식 CI 안내](https://www.kocca.kr/kocca/subPage.do?menuNo=204762), [공식 SVG 원본](https://www.kocca.kr/images/homepage/www/kocca/common/logo_new.svg)
- 고려대학교: [공식 UI 안내](https://www.korea.ac.kr/ko/374/subview.do), [공식 PNG 원본](https://www.korea.ac.kr/sites/ko/images/common/logo_c.png)

기존 저장소를 갱신할 때는 `index.html`, `assets/branding.css`, `assets/branding/`을 함께 올립니다. ZIP에 포함된 전체 파일로 덮어써도 됩니다.

## 공식 안내

- [GitHub Pages 배포 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Pages 사이트 생성과 .nojekyll](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub 파일 업로드 방법과 용량 제한](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
