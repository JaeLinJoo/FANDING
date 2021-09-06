# FANDING 
---------------------------------------
## ■ About FANDING
- K-POP 팬을 위한 크라우드 펀딩 웹 애플리케이션 서비스
  (Crowdfunding service for fans who like K-pop)
  
  K-POP 시장이 성장하면서, K-POP 분야의 크라우드 펀딩이 SNS와 온라인 커뮤니티 중심으로 증가하고 있다. FANDING은 하나의 플랫폼 안에서 펀딩 기획부터 완료까지 한 번에 진행할 수 있는 서비스이다. 펀딩의 총책임자인 총대의 부담을 덜기 위해 업체를 모집하는 서비스와 자동 입금확인 서비스를 제공한다. 총대의 신뢰성을 보장하기 위해 본인인증을 도입하여 더욱 안전한 K-POP 크라우드 펀딩 생태계를 조성한다. SNS에 흩어진 정보를 하나로 모아줌으로써 참여자는 여러 펀딩을 비교해본 후 원하는 펀딩에 참여할 수 있다.
---------------------------------------
## ■ Authors & Role (가나다 순)
- 정재욱: Chatting, Payment
- 주재린: Open banking API, UI design, Notice
- 최진영: Full Stack, Funding, Server 
- 한지은: Application UI & Frontend
---------------------------------------
## ■ Main Target & Stakeholder
### Main Target
- **참여자** : 펀딩에 참여하는 사용자
- **총대** : 펀딩을 기획하고 주도적으로 진행하는 사람, 참여자들의 대표
- **업체** : 굿즈 제작 업체 및 서포트 업체(ex. 푸드 트럭)

#### [핵심시나리오 및 Stakeholder 관계도]
![핵심 시나리오 및 Stakeholder 관계도](./images/target_stakeholder.jpg)

---------------------------------------
## ■ System Architecture
#### [전체 시스템 구조도]
![전체 시스템 구조도](./images/시스템구조도.jpg)

#### [상세 시스템 구조]
<img src="./images/상세시스템구조도.jpg" width="800" height="500">

---------------------------------------
## ■ Functions of FANDING
#### 1. 총대
- 로그인 및 회원가입 기능 (Twitter 로그인 포함)
- 펀딩 생성 기능
- 업체 모집 기능
- 펀딩 진행 기능
- 자동 입금 확인 기능 (오픈 뱅킹 API 이용) 
- 공지사항 작성 기능
- 1:1 채팅 기능

#### 2. 참여자
- 로그인 및 회원가입 기능 (Twitter 로그인 포함)
- 필터링 (최신순, 인기순)과 검색을 통한 펀딩 검색 기능 
- 펀딩 참여 기능
- 펀딩 진행 상황 및 공지사항 확인 기능
- 공지사항 업데이트 이메일 알림 기능 
- 1:1 채팅 기능

#### 3. 업체
- 로그인 및 회원가입 기능
- 필터링 (최신순, 인기순)과 검색을 통한 펀딩 검색 기능
- 업체 지원 기능
- 결제 기능
- 공지사항 작성 기능
- 1:1 채팅 기능
---------------------------------------
## ■ Framework & Language
- **Web**
  - Frontend: Reat, Reactstrap, BootStrap, Material-UI (HTML, CSS, javascript)
  - Backend: Node.js (Language: javacript)
  - DataBase: Firebase

- **사용하는 외부 API**
  - 오픈뱅킹 API
  - IamPort API
 
 #### [활용 기술 스택]
 <img src="./images/활용기술스택.jpg" width="600" height="600">
 
---------------------------------------
## ■ Result
### 1. 참여자 기능 화면
- [로그인 및 회원가입]

![로그인 및 회원가입](./images/로그인화면.jpg)

- [메인 페이지]

![메인페이지](./images/메인화면_1.JPG)
![메인페이지](./images/메인화면_2.JPG)

- [리워드 펀딩 목록]

![리워드펀딩목록](./images/리워드펀딩목록화면.JPG)

- [펀딩 검색]

![펀딩검색](./images/펀딩검색화면.JPG)

- [펀딩 상세 페이지]

![펀딩상세페이지](./images/펀딩상세페이지.JPG)

- [펀딩 참여]

![펀딩참여](./images/펀딩참여화면.JPG)

- [총대에게 문의(채팅)]

![문의채팅](./images/문의채팅화면.JPG)

- [펀딩 찜하기]

![펀딩찜하기](./images/펀딩찜하기화면.JPG)

- [펀딩 공유하기]

![펀딩공유](./images/펀딩공유하기화면.JPG)

- [펀딩 공지사항]

![펀딩공지사항1](./images/펀딩공지사항_1.JPG)
![펀딩공지사항2](./images/펀딩공지사항_2.JPG)

- [공지사항 이메일 알람 확인]

![공지사항이메일알람](./images/공지사항이메일알람확인.JPG)

- [내 정보 수정]

![내정보수정](./images/내정보수정화면.JPG)
---------------------------------------------
### 2. 총대 화면
- [총대 본인 인증]

![총대인증1](./images/본인인증_1.JPG)
![총대인증2](./images/본인인증_2.JPG)

- [업체 모집 폼 생성]

![업체모집폼생성1](./images/업체모집_1.JPG)
![업체모집폼생성2](./images/업체모집_2.JPG)

- [업체 선정 & 업체 문의]

![업체선정및문의](./images/업체선정및문의.JPG)

- [팬 인증하기]

![팬인증하기](./images/팬인증하기.JPG)

- [펀딩 생성]

![펀딩생성](./images/펀딩생성.JPG)

- [펀딩 관리]

![펀딩관리](./images/펀딩관리.JPG)

- [펀딩 참여 현황]

![펀딩참여현황](./images/펀딩참여현황.JPG)

- [참여자 문의사항 확인]

![총대문의확인](./images/총대문의확인화면.JPG)

- [펀딩 마감]
  * 펀딩 마감 이전

   ![펀딩마감이전](./images/펀딩마감이전.JPG)

  * 펀딩 마감 이후
  
   ![펀딩마감이후](./images/펀딩마감이후.JPG)

- [펀딩 진행 상황 변경]

![펀딩진행상황](./images/펀딩공지사항_진행.JPG)

- [펀딩 공지사항 작성]

![펀딩공지사항작성](./images/펀딩공지사항작성.JPG)

- [공지사항 작성 후]

![공지사항작성후](./images/펀딩공지사항작성후_총대.JPG)
---------------------------------------
### 3. 업체 기능 화면
- [업체 지원]

![업체지원](./images/업체지원상세.JPG)

- [업체 지원서 작성]

![업체지원서작성](./images/업체지원서작성.JPG)

- [업체 마이페이지 > 결제]

![업체마이페이지](./images/업체마이페이지.JPG)

- [업체 결제 내역 리스트]

![업체결제내역](./images/업체결제내역.JPG)

- [업체 결제 과정]

![업체결제과정](./images/업체결제과정.JPG)

- [업체 마이페이지 > 펀딩 관리]

![업체마이페이지_펀딩관리](./images/업체마이페이지펀딩관리.JPG)
---------------------------------------
### 4. 팬딩관리자 기능 화면
- [관리자 ID 로그인 > 업체 결제 내역 관리]

![관리자_결제내역](./images/관리자id결제내역페이지.JPG)

---------------------------------------
## ■ Code
- public > index.html : SPA(Single Page Application), 화면이동에 필요한 html 코드
- src> components : 기능 구현을 위한 코드
- src > config : 구성을 위한 명세서 코드
- src > server : api를 Node.js로 처리하기 위한 proxy NodeJs server
- src > store : 상태 관리를 하는 장소 (redux)
- package.json : npm 패키지에 관한 정보와 의존중인 버전에 대한 관한 정보를 담은 코드
---------------------------------------
## ■ Reference
- reactstrap      <https://reactstrap.github.io/> 
- material-ui    <https://material-ui.com/>  
- material-icons <https://material-ui.com/components/material-icons/>
- react-icons <https://react-icons.github.io/react-icons/> 
- lifecycle of react <https://reactjs.org/docs/state-and-lifecycle.html/>


