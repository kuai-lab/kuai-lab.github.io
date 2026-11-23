# 생성형 AI 저작권 보호 SW · GitHub Pages

`genai_compyright_sw.pdf`에 소개된 연구 SW 32건을 찾아보는 홍보용 정적 페이지입니다. WaTeRFlow, CompMarkGS, LVMark를 소개하고, 전체 목록에서 검색·분야 필터와 각 GitHub 저장소 링크를 제공합니다. 별도 빌드 없이 GitHub Pages에 올릴 수 있으며 원문 PDF도 열거나 다운로드할 수 있습니다.

## 파일 구성

```text
genai-sw-pages/
├── index.html
├── genai_compyright_sw.pdf
├── .nojekyll
├── README.md
└── assets/
    ├── style.css
    ├── branding.css    # 기관·과제 소개 배치
    ├── branding/       # 한국콘텐츠진흥원·고려대학교 공식 로고
    ├── favicon.svg
    ├── projects.js      # 연구 SW 32건 데이터
    ├── main.js          # 목록 표시·검색·분야 필터
    └── images/          # 주요 SW 3건의 논문 대표 그림
```

## GitHub에 올리기

1. GitHub에서 새 저장소를 만듭니다. GitHub Free 계정이라면 **Public**을 선택합니다. 저장소 이름은 예를 들어 `genai-sw`로 정합니다.
2. ZIP을 받았다면 압축을 풉니다. 저장소에서 **Add file → Upload files**를 선택하고 이 폴더 **안의 파일들과 `assets` 폴더**를 올린 뒤 커밋합니다. ZIP 자체나 바깥의 `genai-sw-pages` 폴더를 올리지 마세요. 저장소 첫 화면에 `index.html`이 보여야 합니다.
3. `.nojekyll`도 올립니다. Mac Finder에서 **⌘⇧.**으로 숨김 파일을 표시할 수 있습니다. 누락했다면 GitHub의 **Add file → Create new file**에서 이름이 `.nojekyll`인 빈 파일을 만듭니다.
4. **Settings → Pages → Build and deployment**에서 아래 항목을 선택하고 **Save**를 누릅니다.
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. 배포 후 같은 화면의 **Visit site**로 접속합니다. 반영에는 최대 10분 정도 걸릴 수 있습니다. 일반적인 프로젝트 주소는 `https://사용자명.github.io/저장소명/`입니다.

PDF는 **19,743,202 bytes(약 18.83 MiB)**로, GitHub 웹 업로드 한도인 파일당 25 MiB 이내입니다. 파일을 다른 브랜치에 올렸다면 4단계에서 해당 브랜치를 선택합니다.

## 내 컴퓨터에서 보기

`index.html`을 더블클릭해 브라우저로 열어볼 수 있습니다. 로컬 파일 열기에 제한이 있거나 배포 환경과 비슷하게 확인하려면 Python 3가 설치된 컴퓨터에서 이 폴더를 열고 아래 명령을 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속합니다. 서버 종료는 **Ctrl+C**입니다.

## 내용 수정하기

- **프로젝트 추가·수정:** `assets/projects.js`의 `window.SOFTWARE_PROJECTS` 배열을 수정합니다. 각 항목의 `id`(고유 식별자), `name`(이름), `title`(제목), `description`(설명), `category`(분야), `url`(GitHub 주소), `page`(PDF 페이지), `featured`(주요 SW 여부) 값을 맞춥니다. `id`는 중복되지 않게 정하고 분야 값은 기존 표기를 따릅니다. `featured`는 목록 상단 배치에 사용되며, 대표 기술 3개 카드 자체는 HTML에서 수정합니다.
- **페이지 문구:** `index.html`에서 소개 문구와 주요 SW 설명을 수정합니다. 브라우저 제목인 `<title>`과 `<meta name="description">`, 소셜 공유 메타 정보도 함께 수정합니다. 프로젝트 수나 주요 SW가 바뀌면 해당 소개 문구와 카드도 확인합니다.
- **PDF:** 같은 이름의 `genai_compyright_sw.pdf`로 교체합니다. 원본 파일명에 포함된 `compyright` 철자도 경로의 일부이므로 그대로 유지합니다. 이름을 바꾸려면 HTML의 관련 링크도 모두 수정합니다.
- **이미지:** `assets/images/`의 파일을 교체하고 HTML의 이미지 경로와 대체 텍스트(`alt`)를 맞춥니다. 논문 대표 그림은 원본 비율을 유지해 전체가 표시되며, 클릭하면 논문으로 이동합니다. PDF를 바꾸어도 이미지는 자동으로 갱신되지 않습니다.
- **디자인·동작:** 색상·글꼴·간격·모바일 레이아웃은 `assets/style.css`에서, 목록 표시·검색·분야 필터는 `assets/main.js`에서 수정합니다.
- **SW 사용:** 각 GitHub 저장소로 이동해 해당 저장소의 README에서 설치·사용 방법을 확인합니다. 페이지의 PDF 다운로드는 소개 자료 원문을 제공합니다.
- **경로:** 상대 경로를 유지하면 프로젝트 저장소의 하위 주소에서도 작동합니다. 파일명 대소문자와 폴더 구조를 그대로 유지하세요.
- **업데이트:** 수정한 파일을 같은 저장소와 배포 브랜치에 다시 올리고 커밋하면 Pages에 반영됩니다. PDF 교체 시 표시된 용량과 설명도 확인하세요.

## 논문 대표 이미지 출처

사이트 이름은 **생성형 AI 저작권 보호**입니다. 주요 기술 카드의 그림은 각 연구의 공식 프로젝트 또는 저장소에서 제공하는 논문 대표 그림을 사용합니다. 파일은 원본 그대로 포함했으며, 화면에서는 비율을 유지해 축소 표시합니다.

| 연구 | 로컬 파일 | 공식 이미지 출처 | 논문 |
| --- | --- | --- | --- |
| WaTeRFlow | `assets/images/waterflow-paper.png` | [공식 프로젝트 Overview](https://kuai-lab.github.io/cvpr2026waterflow/) · [원본 PNG](https://kuai-lab.github.io/cvpr2026waterflow/static/imgs/Main_fig.png) | [arXiv:2512.19048](https://arxiv.org/abs/2512.19048) |
| CompMarkGS | `assets/images/compmarkgs-paper.jpg` | [공식 프로젝트 Overview](https://kuai-lab.github.io/iclr2026compmarkgs/) · [원본 JPG](https://kuai-lab.github.io/iclr2026compmarkgs/static/imgs/main_figure.jpg) | [ICLR 2026 / OpenReview](https://openreview.net/forum?id=NXQvejGBFx) |
| LVMark | `assets/images/lvmark-paper.png` | [공식 저장소](https://github.com/kuai-lab/TIFS26_lvmark) · [원본 PNG](https://raw.githubusercontent.com/kuai-lab/TIFS26_lvmark/main/assets/LVMark.png) | [arXiv:2412.09122](https://arxiv.org/abs/2412.09122) |

그림의 저작권은 각 논문의 저자 및 권리자에게 있습니다. CompMarkGS 공식 프로젝트 페이지의 라이선스 표기는 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)입니다. 그림을 수정·재배포할 때는 해당 원출처의 조건과 출처 표기를 유지합니다.

## 기관 및 과제 표기

- 사업 주관: **한국콘텐츠진흥원**
- 연구 수행: **고려대학교 (고려대학교산학협력단)**
- 과제명: **생성형 AI 저작권 관리 및 보호 기술 개발을 위한 국제공동연구 및 글로벌 인재 양성**
- 과제번호: **RS-2024-00345025**

상단 기관·과제 소개와 하단 기관 정보를 반영했습니다. `assets/branding.css`에서 배치를 조정하며, 로고 원본은 `assets/branding/`에 포함되어 외부 이미지 서버 연결 없이 표시됩니다. 로고의 색상과 가로세로 비율을 유지합니다.

- 한국콘텐츠진흥원: [공식 CI 안내](https://www.kocca.kr/kocca/subPage.do?menuNo=204762), [공식 SVG 원본](https://www.kocca.kr/images/homepage/www/kocca/common/logo_new.svg)
- 고려대학교: [공식 UI 안내](https://www.korea.ac.kr/ko/374/subview.do), [공식 PNG 원본](https://www.korea.ac.kr/sites/ko/images/common/logo_c.png)

기존 저장소를 갱신할 때는 `index.html`, `assets/style.css`, `assets/images/`, `assets/branding.css`, `assets/branding/`을 함께 올립니다. ZIP에 포함된 전체 파일로 덮어써도 됩니다.

## 공식 안내

- [GitHub Pages 배포 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Pages 사이트 생성과 .nojekyll](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub 파일 업로드 방법과 용량 제한](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
