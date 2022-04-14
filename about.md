---
layout: article
titles:
  # @start locale config
  en      : &EN       About
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  关于
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  zh-Hant : &ZH_HANT  關於
  zh-TW   : *ZH_HANT
  zh-HK   : *ZH_HANT
  ko      : &KO       소개
  ko-KR   : *KO
  fr      : &FR       À propos
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-about
---

본 블로그의 목적은 논문을 각자 관심있게 본 논문을 정리하는 것과 정보를 제공하는 것에 그 목적이 있습니다. 글을 올리는 법은 다음과 같습니다.   

랩실 소속 학생이라면 아래와 같이 git clone을 해주시면 됩니다. 

```
git clone https://github.com/kuai-lab/kuai-lab.github.io.git
```

그게 아니라면 레포지토리를 Fork 한 뒤에, 글을 정리한 후에 Pull request를 날릴 수도 있습니다. 

## 디렉토리 구조

`_posts` 폴더 안에 이 때 까지 작성한 글들이 있습니다. 

```
|--_posts
     |--2022-04-14-align.md
```

`YYYY-MM-DD-제목.md` 형식을 지켜주셔서 글을 작성해주시면 됩니다. 글 예시는 다음과 같습니다. title은 제목, tags는 tag, author는 등록한 저자의 ID를 등록합니다. 이 때의 ID란, `_data/authors.yml`에 있는 저자 정보를 뜻합니다. 

`_data/authors.yml` 에 등록한 저자정보 예시
```
Tian Qi:
  name      : Tian Qi
  url       : https://tianqi.name
  avatar    : https://wx3.sinaimg.cn/large/73bd9e13ly1fjkqy66hl8j208c08c0td.jpg
  bio       : Author of TeXt.
  email     : kitian616@outlook.com
  facebook  : # "user_name" the last part of your profile url, e.g. https://www.facebook.com/user_name
  twitter   : kitian616 # "user_name" the last part of your profile url, e.g. https://twitter.com/user_name
  weibo     : 234695683 # "user_id"   the last part of your profile url, e.g. https://www.weibo.com/user_id/profile?...
  googleplus: 101827554735084402671 # "user_id"   the last part of your profile url, e.g. https://plus.google.com/u/0/user_id
  telegram  : # "user_name" the last part of your profile url, e.g. https://t.me/user_name
  medium    : # "user_name" the last part of your profile url, e.g. https://medium.com/user_name
  zhihu     : # "user_name" the last part of your profile url, e.g. https://www.zhihu.com/people/user_name
  douban    : # "user_name" the last part of your profile url, e.g. https://www.douban.com/people/user_name
  linkedin  : # "user_name" the last part of your profile url, e.g. https://www.linkedin.com/in/user_name
  github    : kitian616 # "user_name" the last part of your profile url, e.g. https://github.com/user_name
  npm       : # "user_name" the last part of your profile url, e.g. https://www.npmjs.com/~user_name
```


블로그 글 예시입니다. Scaling~은 home에서 보이는 요약글 이므로, This is a paper review 부분부터 본문 작성해주시면 됩니다. 
```
---
title: ALIGN
tags: multi-modal
author: lsh
---

Scaling Up Visual and Vision-Language Representation Learning With Noisy Text Supervision

<!--more-->

---

 This is a paper review

```
