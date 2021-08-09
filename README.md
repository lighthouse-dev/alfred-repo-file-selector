# alfred-repo-file-selector

Github Repository 내애서 파일 검색이 가능한 알프레드 워크플로우

## Environment Variables

`.env.sample` 파일을 `.env` 로 복사하여 ↓ `GITHUB_TOKEN`, `GITHUB_TOKEN` 설정이 필요

```json
GITHUB_TOKEN=
GITHUB_REPOSITORY_NAME=
```

.env

- `GITHUB_TOKEN`: Github 토큰
- `GITHUB_REPOSITORY_NAME`: 검색 대상 리포지토리
  - `<github 계정이름>/<repository name>`
  - 예: lighthouse-dev/dummy-repository

## Authors

- [@lighthouse-dev](https://github.com/lighthouse-dev)
