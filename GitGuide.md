# Git Master

## \# 저장소 fork 하기

### 1. 원본 저장소를 fork
![원본 저장소의 포크 버튼](/images/git_fork_repository.png)

### 2. fork 된 저장소 확인
![포크한 결과](/images/git_forked_repository.png)


## \# fork한 저장소를 원본 저장소와 동기화하기

### 1. 로컬 저장소 상태 확인
```
user /Vue_Study (master)
$ git remote -v

origin  https://github.com/tristan3716/Vue_Study.git (fetch)
origin  https://github.com/tristan3716/Vue_Study.git (push)
```

### 2. 원본 저장소 추가
```
user /Vue_Study (master)
$ git remote add https://github.com/VueMasters/Vue_Study.git
```

### 3. 추가된 결과 확인
```
user /Vue_Study (master)
$ git remote -v

origin    https://github.com/tristan3716/Vue_Study.git (fetch)
origin    https://github.com/tristan3716/Vue_Study.git (push)
upstream  https://github.com/VueMasters/Vue_Study.git (fetch)
upstream  https://github.com/VueMasters/Vue_Study.git (push)
```

### 4. upstream에서 변동사항 가져오기
```
user /Vue_Study (master)
$ git fetch upstream

remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 6 (delta 2), reused 4 (delta 1), pack-reused 0
Unpacking objects: 100% (6/6), 1.03 KiB | 55.00 KiB/s, done.
From https://github.com/VueMasters/Vue_Study
 * [new branch]      master     -> upstream/master
```

### 5. upstream의 변동사항 로컬 저장소로 병합하기
```
user /Vue_Study (master)
$ git merge upstream/master

Updating d6a37c8..64785bf
Fast-forward
 1 file changed, 2 insertions(+), 4 deletions(-)
```

## \# 로컬 저장소에서 fork 한 저장소로 푸시하기

### 1. staging 확인
```
user /Vue_Study (master)
$ git status

On branch master
Your branch is ahead of 'origin/master' by 14 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        GitGuide.md
        images/

nothing added to commit but untracked files present (use "git add" to track)
```

### 2. 변경된 파일 staging 하기
```
user /Vue_Study (master)
$ git add GitGuide.md // 특정 파일만 추가
user /Vue_Study (master)
$ git add . // 현재 경로 이하의 모든 파일
```

VSCode에서 다음과 같이 확인할 수 있다.

![VSCode의 소스 컨트롤에서 staging을 확인한 결과](/images/git_staging_vscode.png)

### 3. commit 하기
```
user /Vue_Study (master)
$ git commit -m "add git guide"

[master 4ec1b32] add git guide
 4 files changed, 111 insertions(+)
 create mode 100644 GitGuide.md
 create mode 100644 images/git_fork_repository.png
 create mode 100644 images/git_forked_repository.png
 create mode 100644 images/git_staging_vscode.png

// 현재 staging 된 파일들이 커밋된다.
```

### 4. pull & push
```
user /Vue_Study (master)
$ git pull

user /Vue_Study (master)
$ git push

Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 57.85 KiB | 19.28 MiB/s, done.
Total 7 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/tristan3716/Vue_Study.git
   64785bf..4ec1b32  master -> master
```

## \# Pull Request 보내기

### 1. origin 저장소의 커밋된 결과 확인
![풀 리퀘스트 버튼의 모습](/images/git_pull_request_button.png)

### 2. 풀 리퀘스트 보내기 전 확인
![풀 리퀘스트 화면1](/images/git_pull_request_comparing_changes.png)

1의 버튼을 누르면 위와 같은 화면을 확인할 수 있다.  
커밋 내역을 확인하고 Create pull request 버튼을 클릭

### 3. PR 메시지 작성
![풀 리퀘스트 화면2](/images/git_pull_request_write.png)

(3) Reviewers엔 지정된 리뷰어를 할당

필요한 내용들 채우고 (4) Create pull request 한다.

### 4. 리뷰 => 머지
![리뷰와 머지](/images/git_pull_request_review_and_merge.png)

작성된 Pull request를 리뷰어가 확인 후 승인하고, 머지하면 끝.