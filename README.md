# Frontend Developer Portfolio

> 요구사항을 이해하고, 성능과 사용자 경험까지 고민하는 개발자

웹의 동작 원리를 이해하고 사용자 경험을 개선하는 프론트엔드 개발을 지향합니다.

단순히 기능을 구현하는 것에서 끝내지 않고, **성능·접근성·사용자 경험을 직접 측정하고 검증하는 과정**을 중요하게 생각합니다.

---

## About

- HTML / CSS / JavaScript 기반의 웹 개발
- React / TypeScript / Next.js 기반 애플리케이션 개발
- GSAP / R3F / Three.js를 활용한 인터랙티브 웹 구현
- Supabase / TanStack Query를 활용한 데이터 처리
- Playwright를 활용한 E2E 테스트
- Lighthouse 및 브라우저 DevTools를 활용한 성능·접근성 검증
- AI를 개발 과정에 활용하되, 구현 결과는 직접 검증하고 개선

---

## Projects

### 01. Interactive Showcase

**GSAP과 R3F를 활용한 인터랙티브 웹 프로젝트**

학습한 3D 및 인터랙션 기술을 실제 웹 환경에 적용하고, 성능과 접근성을 직접 검증하기 위해 제작했습니다.

**주요 경험**

- GSAP / R3F 기반 인터랙션 구현
- GLB 에셋 최적화
- 브라우저 Rendering Stats를 활용한 FPS 측정
- DoF 및 Autofocus 성능 비교
- 실제 스크린리더를 통한 접근성 검증
- Playwright E2E 테스트
- AI를 활용한 요구사항 분석 및 개발 생산성 개선

**Performance**

- GLB 파일 크기 **71MB → 5MB**
- 약 **93% 용량 감소**
- 240Hz 환경에서 인터랙션 FPS 측정
- DoF Autofocus 활성화에 따른 FPS 변화 측정

**Tech**

`React` `TypeScript` `R3F` `Three.js` `GSAP` `Playwright`

---

### 02. Enterprise Management System

**직원·근태·휴가·IT 자산을 관리하는 사내 ERP 시스템**

기존 업무에서 발생하던 수기 휴가 신청과 메신저를 통한 IT 자산 정보 확인 등의 불편을 시스템으로 개선하는 것을 목표로 제작했습니다.

**주요 경험**

- 역할과 상태에 따른 기능 접근 제어
- Supabase RLS를 활용한 데이터 접근 제어
- TanStack Query 기반 서버 상태 관리
- 검색 입력 Debounce
- 휴가 신청 / 승인 / 반려 프로세스 구현
- 키보드 포커스 접근성 개선
- 데이터부터 UI까지 전체 흐름 구현

**Tech**

`Next.js` `React` `TypeScript` `Supabase` `TanStack Query`

---

### 03. Landing Page Showcase

**Claude Code를 활용한 AI 협업 개발 프로젝트**

AI에게 단순히 코드를 생성하도록 요청하는 방식에서 벗어나, 요구사항 정의부터 테스트와 검증까지 개발 프로세스에 AI를 활용하는 방법을 실험하고 있습니다.

현재 진행 중인 프로젝트입니다.

**개발 프로세스**

```text
Requirement
    ↓
AI Interview
    ↓
Specification
    ↓
ADR
    ↓
Issue
    ↓
Implementation
    ↓
Test Scenario
    ↓
TDD
    ↓
Refactoring
    ↓
Security Check
    ↓
E2E Test
    ↓
PR
    ↓
Loop
```

**주요 경험**

- CLAUDE.md를 통한 프로젝트 컨텍스트 정의
- PRD / Spec / ADR 기반 요구사항 구체화
- AI Interview를 통한 누락 요구사항 발견
- TDD 기반 기능 구현
- TanStack Query를 활용한 검색 / 필터 캐싱
- `use cache`를 활용한 페이지 이동 캐싱
- Playwright 기반 E2E 테스트
- AI 작업 중 코드 리뷰 및 실제 사용자 관점 검증

**Caching**

캐싱 적용 전후 페이지 이동 요청을 비교했습니다.

| 구분      |   적용 전 |               적용 후 |
| --------- | --------: | --------------------: |
| 첫 요청   |     7.16s |                 0.17s |
| 캐시 요청 |   약 7.0s |            0.01~0.02s |
| DB 요청   | 매번 발생 | 최초 요청 이후 재사용 |

첫 요청 기준 약 **97.6% 감소**, 캐시 적중 요청에서는 약 **99.8% 감소**했습니다.

**Tech**

`Next.js` `React` `TypeScript` `Supabase` `TanStack Query` `Playwright` `Claude Code`

---

### 04. Shopping Platform

**상품 조회부터 장바구니까지 구현한 커머스 프로젝트**

5인 팀 프로젝트로 실제 쇼핑몰의 주요 사용자 흐름을 구현했습니다.

**담당 기능**

- 상품 목록 / 상세 Read API
- 상품 검색 / 필터
- Pagination
- 이미지 최적화
- 장바구니 데이터 처리

**주요 경험**

- Supabase Query를 활용한 검색 / 필터 처리
- URLSearchParams를 활용한 검색 / 필터 / 페이지 상태 관리
- TanStack Query 기반 서버 상태 관리
- Lighthouse를 통한 성능 검증
- Git / PR 기반 협업
- 기능 단위 Issue / PR로 협업 방식 개선

**Tech**

`Next.js` `React` `TypeScript` `Supabase` `TanStack Query`

---

## Tech Stack

### Frontend

`HTML` `CSS` `JavaScript` `TypeScript` `React` `Next.js` `Tailwind CSS`

### Data

`Supabase` `TanStack Query`

### Testing

`Playwright`

### Collaboration

`Git`

---

## What I Focus On

### Performance

감각적으로 빠르다고 판단하기보다 실제 환경에서 측정하고 병목을 찾아 개선합니다.

- Lighthouse
- Chrome DevTools
- Frame Rendering Stats
- 이미지 / 3D 에셋 최적화
- 캐싱 전략

### Accessibility

자동화 도구의 결과만 확인하지 않고 실제 사용 환경을 기준으로 검증합니다.

- Semantic HTML
- Keyboard Navigation
- Focus Visibility
- Screen Reader
- Reduced Motion

### Problem Solving

기능 구현 자체보다 **왜 문제가 발생했는지 확인하고, 측정 결과를 바탕으로 해결하는 과정**을 중요하게 생각합니다.

---

## Development Philosophy

```text
요구사항 이해
      ↓
구현
      ↓
측정
      ↓
문제 발견
      ↓
개선
      ↓
검증
```

AI를 활용해 개발 속도를 높이더라도 최종적인 판단과 검증은 개발자의 역할이라고 생각합니다.

AI가 코드를 작성하는 동안 저는 PR을 확인하고 실제 사용자 관점에서 테스트하며, 요구사항의 누락이나 구현 과정에서 발생한 문제를 보완하는 방식으로 협업하고 있습니다.

---

## Portfolio

포트폴리오 사이트에서 프로젝트와 인터랙션을 직접 확인할 수 있습니다.

**Portfolio:** `배포 URL`

**GitHub:** `GitHub URL`

---

## Contact

syp7875@naver.com
