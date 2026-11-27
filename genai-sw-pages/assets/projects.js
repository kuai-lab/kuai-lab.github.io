// PDF 수록 SW 32건과 공식 연구실 웹사이트에서 추가한 연구 4건입니다.
// PDF 미수록 연구는 page: null과 paperUrl을 사용합니다.
// GuardMarkGS는 코드 공개 전까지 공식 연구 소개 페이지로 연결합니다.
window.SOFTWARE_PROJECTS = [
  {
    id: "trackcraft3r",
    name: "TrackCraft3R",
    title: "TrackCraft3R: Repurposing Video Diffusion Transformers for Dense 3D Tracking",
    description: "비디오 확산 트랜스포머를 활용해 조밀한 3차원 움직임을 추적하는 연구입니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/TrackCraft3r",
    page: 2,
    featured: false
  },
  {
    id: "videomama-plusplus",
    name: "VideoMaMa++",
    title: "VideoMaMa++: Temporally Consistent Video Matting via Preserve-and-Refine Tokens",
    description: "보존·정제 토큰을 활용해 시간적 일관성을 고려하는 비디오 매팅 연구입니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/VideoMaMa-PlusPlus",
    page: 3,
    featured: false
  },
  {
    id: "csfm",
    name: "CSFM",
    title: "Better Source, Better Flow: Learning Condition-Dependent Source Distribution for Flow Matching",
    description: "플로 매칭에서 조건에 따라 달라지는 소스 분포를 학습하는 연구입니다.",
    category: "image",
    url: "https://github.com/junwankimm/CSFM",
    page: 4,
    featured: false
  },
  {
    id: "gard",
    name: "GARD",
    title: "GARD: Geometry-Aware Representation Denoising for Robust Multi-view 3D Reconstruction",
    description: "기하 정보를 고려한 표현 노이즈 제거로 다중 시점 3D 복원을 다룹니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/GARD",
    page: 5,
    featured: false
  },
  {
    id: "spatialclaw",
    name: "SpatialClaw",
    title: "Rethinking the Action Interface for Agentic Spatial Reasoning",
    description: "에이전트의 공간 추론을 위한 행동 인터페이스를 탐구합니다.",
    category: "agents",
    url: "https://github.com/NVlabs/SpatialClaw",
    page: 6,
    featured: false
  },
  {
    id: "gld",
    name: "GLD",
    title: "Geometric Latent Diffusion: Repurposing Geometric Foundation Models for Multi-view Diffusion",
    description: "기하 파운데이션 모델을 다중 시점 확산 모델에 활용하는 연구입니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/GLD",
    page: 7,
    featured: false
  },
  {
    id: "coral",
    name: "CORAL",
    title: "CORAL: Correspondence Alignment for Improved Virtual Try On",
    description: "대응 관계 정렬을 활용해 가상 의류 착용 이미지를 생성하는 연구입니다.",
    category: "image",
    url: "https://github.com/cvlab-kaist/CORAL",
    page: 8,
    featured: false
  },
  {
    id: "mvip",
    name: "MVIP",
    title: "MVIP: Meta Inverse Prompting for Video Generative Models",
    description: "비디오 생성 모델을 위한 메타 역방향 프롬프팅 방법을 다룹니다.",
    category: "video",
    url: "https://github.com/ueriniuno/MVIP",
    page: 9,
    featured: false
  },
  {
    id: "mv-tap",
    name: "MV-TAP",
    title: "MV-TAP: Tracking Any Point in Multi-View Videos",
    description: "여러 시점의 비디오에서 점의 움직임을 추적하는 연구입니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/MV-TAP",
    page: 10,
    featured: false
  },
  {
    id: "3dsceneprompt",
    name: "3DScenePrompt",
    title: "3D Scene Prompting for Scene-Consistent Camera-Controllable Video Generation",
    description: "3D 장면 프롬프팅으로 장면 일관성과 카메라 제어를 고려한 비디오 생성을 다룹니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/3DScenePrompt",
    page: 11,
    featured: false
  },
  {
    id: "matrix",
    name: "MATRIX",
    title: "MATRIX: Mask Track Alignment for Interaction-aware Video Generation",
    description: "마스크 궤적 정렬을 통해 상호작용을 고려한 비디오 생성을 연구합니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/MATRIX",
    page: 12,
    featured: false
  },
  {
    id: "compmarkgs",
    name: "CompMarkGS",
    title: "CompMarkGS: Robust Watermarking for Compression 3D Gaussian Splatting",
    description: "3D Gaussian Splatting 콘텐츠의 압축을 고려한 워터마킹 기술을 연구합니다.",
    category: "protection",
    url: "https://github.com/kuai-lab/iclr26_CompMarkGS",
    page: 13,
    featured: true
  },
  {
    id: "c3g",
    name: "C3G",
    title: "C3G: Learning Compact 3D Representations with 2K Gaussians",
    description: "2K 가우시안을 이용해 간결한 3D 표현을 학습하는 연구입니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/C3G",
    page: 14,
    featured: false
  },
  {
    id: "robustvggt",
    name: "RobustVGGT",
    title: "RobustVGGT: Emergent Outlier View Rejection in Visual Geometry Grounded Transformers",
    description: "시각 기하 트랜스포머에서 이상 시점을 배제하는 현상을 연구합니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/RobustVGGT",
    page: 15,
    featured: false
  },
  {
    id: "deepforcing",
    name: "DeepForcing",
    title: "Training-Free Long Video Generation with Deep Sink and Participative Compression",
    description: "Deep Sink와 참여형 압축을 이용한 추가 학습 없는 장편 비디오 생성을 다룹니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/DeepForcing",
    page: 16,
    featured: false
  },
  {
    id: "goat",
    name: "GOAT",
    title: "GOAT: A Training Framework for Goal-Oriented Agent with Tools",
    description: "도구를 활용하는 목표 지향 에이전트를 위한 학습 프레임워크입니다.",
    category: "agents",
    url: "https://github.com/KU-MIIL/GOAT",
    page: 17,
    featured: false
  },
  {
    id: "dynamic-editor",
    name: "Dynamic-eDiTor",
    title: "Dynamic-eDiTor: Training-Free Text-Driven 4D Scene Editing with Multimodal Diffusion Transformer",
    description: "멀티모달 확산 트랜스포머로 추가 학습 없이 텍스트 기반 4D 장면 편집을 연구합니다.",
    category: "spatial",
    url: "https://github.com/kuai-lab/cvpr26_Dynamic-eDiTor",
    page: 18,
    featured: false
  },
  {
    id: "waterflow",
    name: "WaTeRFlow",
    title: "WaTeRFlow: Watermark Temporal Robustness via Flow Consistency",
    description: "플로 일관성을 활용해 영상 생성 과정에서 워터마크의 시간적 강인성을 연구합니다.",
    category: "protection",
    url: "https://github.com/kuai-lab/cvpr26_WaTeRFlow",
    page: 19,
    featured: true
  },
  {
    id: "uuef",
    name: "UUEF",
    title: "Are We Truly Forgetting? A Critical Re-examination of Machine Unlearning Evaluation Protocols",
    description: "머신 언러닝의 평가 프로토콜을 재검토하고 제거 효과의 평가 방식을 탐구합니다.",
    category: "unlearning",
    url: "https://github.com/yongwookim1/UUEF",
    page: 20,
    featured: false
  },
  {
    id: "tag",
    name: "TAG",
    title: "TAG: Tangential Amplifying Guidance for Hallucination-Resistant Sampling",
    description: "환각에 대응하는 샘플링을 위해 접선 방향 증폭 가이던스를 연구합니다.",
    category: "image",
    url: "https://github.com/hyeon-cho/Tangential-Amplifying-Guidance",
    page: 21,
    featured: false
  },
  {
    id: "apple",
    name: "APPLE",
    title: "APPLE: Attribute-Preserving Pseudo-Labeling for Diffusion-Based Face Swapping",
    description: "속성 보존 의사 라벨링을 활용한 확산 모델 기반 얼굴 교체를 연구합니다.",
    category: "image",
    url: "https://github.com/cvlab-kaist/APPLE",
    page: 22,
    featured: false
  },
  {
    id: "cameo",
    name: "CAMEO",
    title: "Correspondence-Attention Alignment for Multi-View Diffusion Models",
    description: "다중 시점 확산 모델에서 대응 관계와 어텐션의 정렬을 연구합니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/CAMEO",
    page: 23,
    featured: false
  },
  {
    id: "attention-symmetric-decomposition",
    name: "Attention Symmetric Decomposition",
    title: "Balancing Fidelity and Diversity in Diffusion Models via Symmetric Attention Decomposition: Hopfield Perspective",
    description: "대칭 어텐션 분해와 홉필드 관점에서 확산 모델의 충실도·다양성 균형을 연구합니다.",
    category: "image",
    url: "https://github.com/hyeon-cho/Attention-Symmetric-Decomposition",
    page: 24,
    featured: false
  },
  {
    id: "anthrotap",
    name: "AnthroTAP",
    title: "AnthroTAP: Learning Point Tracking with Real-World Motion",
    description: "현실 세계의 움직임을 이용해 점 추적을 학습하는 연구입니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/AnthroTAP",
    page: 25,
    featured: false
  },
  {
    id: "videomama",
    name: "VideoMaMa",
    title: "VideoMaMa: Mask-Guided Video Matting via Generative Prior",
    description: "생성 사전 지식과 마스크 가이드를 활용한 비디오 매팅 연구입니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/VideoMaMa",
    page: 26,
    featured: false
  },
  {
    id: "interrvos",
    name: "InterRVOS",
    title: "InterRVOS: Interaction-Aware Referring Video Object Segmentation",
    description: "상호작용을 고려하는 지시 표현 기반 비디오 객체 분할을 연구합니다.",
    category: "video",
    url: "https://github.com/cvlab-kaist/InterRVOS",
    page: 27,
    featured: false
  },
  {
    id: "tair",
    name: "TAIR",
    title: "Text-Aware Image Restoration with Diffusion Models",
    description: "확산 모델을 이용해 텍스트를 고려한 이미지 복원을 연구합니다.",
    category: "image",
    url: "https://github.com/cvlab-kaist/TAIR",
    page: 28,
    featured: false
  },
  {
    id: "moai",
    name: "MoAI",
    title: "Aligned Novel View Image and Geometry Synthesis via Cross-modal Attention Instillation",
    description: "교차 모달 어텐션 주입으로 새로운 시점의 이미지와 기하 정보 생성을 연구합니다.",
    category: "spatial",
    url: "https://github.com/cvlab-kaist/MoAI",
    page: 29,
    featured: false
  },
  {
    id: "sigma",
    name: "SIGMA",
    title: "Single Image-based Gaussian Splatting for 3D Reconstruction of Movable Articulated Objects",
    description: "단일 이미지와 Gaussian Splatting으로 움직일 수 있는 관절형 객체의 3D 복원을 연구합니다.",
    category: "spatial",
    url: "https://github.com/kuai-lab/AEI25_SIGMA",
    page: 30,
    featured: false
  },
  {
    id: "lvmark",
    name: "LVMark",
    title: "LVMark: Robust Watermark for Latent Video Diffusion Models",
    description: "잠재 비디오 확산 모델을 위한 강인한 워터마크 기술을 연구합니다.",
    category: "protection",
    url: "https://github.com/kuai-lab/TIFS26_lvmark",
    page: 31,
    featured: true
  },
  {
    id: "lfu",
    name: "LfU",
    title: "Learning from the Undesirable: Robust Adaptation of Language Models without Forgetting",
    description: "바람직하지 않은 사례를 활용해 망각 없이 언어 모델을 적응시키는 방법을 연구합니다.",
    category: "unlearning",
    url: "https://github.com/yunpal/LfU",
    page: 32,
    featured: false
  },
  {
    id: "decoupled-hoi",
    name: "Decoupled HOI",
    title: "Decoupled Generative Modeling for Human-Object Interaction Synthesis",
    description: "분리된 생성 모델링을 활용해 사람과 객체 간 상호작용을 합성하는 연구입니다.",
    category: "spatial",
    url: "https://github.com/kuai-lab/cvpr26_Decoupled_HOI",
    page: 33,
    featured: false
  },
  {
    id: "3d-gsw",
    name: "3D-GSW",
    title: "3D-GSW: 3D Gaussian Splatting for Robust Watermarking",
    description: "3D Gaussian Splatting에 워터마크를 삽입해 모델과 렌더링 이미지의 변형 이후에도 소유권을 식별하는 연구입니다.",
    category: "protection",
    url: "https://github.com/kuai-lab/cvpr25_3D-GSW",
    paperUrl: "https://arxiv.org/abs/2409.13222",
    page: null,
    featured: true
  },
  {
    id: "waterf",
    name: "WateRF",
    title: "WateRF: Robust Watermarks in Radiance Fields for Protection of Copyrights",
    description: "NeRF에 이진 메시지를 삽입하고 다양한 시점에서 렌더링한 이미지에서 복원해 3D 콘텐츠의 저작권을 보호합니다.",
    category: "protection",
    url: "https://github.com/kuai-lab/cvpr2024_WateRF",
    paperUrl: "https://arxiv.org/abs/2405.02066",
    page: null,
    featured: true
  },
  {
    id: "guardmarkgs",
    name: "GuardMarkGS",
    title: "GuardMarkGS: Unified Ownership Tracing and Edit Deterrence for 3D Gaussian Splatting",
    description: "3D Gaussian Splatting의 소유권 추적과 무단 편집 억제를 함께 최적화하는 통합 저작권 보호 연구입니다.",
    category: "protection",
    url: "https://kuaicv.com/pre-print/",
    paperUrl: "https://arxiv.org/abs/2605.12919",
    codeStatus: "planned",
    releaseNote: "코드 비공개 · 2026.12.18 이후 공개 예정",
    page: null,
    featured: true
  },
  {
    id: "faceshield",
    name: "FaceShield",
    title: "FaceShield: Defending Facial Image against Deepfake Threats",
    description: "얼굴 이미지에 보호용 미세 교란을 삽입해 확산 모델과 GAN 기반 딥페이크의 얼굴 합성을 방해합니다.",
    category: "protection",
    url: "https://github.com/kuai-lab/iccv25_faceshield",
    paperUrl: "https://arxiv.org/abs/2412.09921",
    page: null,
    featured: false
  }
];
