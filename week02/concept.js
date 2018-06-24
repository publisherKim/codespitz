/*
  + 역활 인식 훈련
  덩어리진 코드를 분리하기
  책임 권한 역활

  + 역활 모델의 인식 변화 하기
  DATA LOAD

  RENDERING

  NATIVE BINDING

  + Domain pattern
  
  DATA SUPPLY
  loader 공급하기 위한 하나의 방법일뿐 
  진짜 중요한건 렌더러에게 데이터를 공급하는게 중요하다.
  RENDERING

  분리된 객체끼리 통신하려면 인자로 전달할수 밖에 없다.
  VALUE -> OBJECT
  
  DATA SUPPLY

  DATA
  GETDATA(): THENABLE

  JOSN    XML     CSV
  DATA    DATA    DATA

  RENDERING

  Data는 형태일 뿐이다. 
  data의 종류에 따라 parsing logic만 달라질 뿐이다.

  + 알고리즘이란 
  제어 로직과 변수를 통해서 문제를 해결하는 과정

  if 3단계이상은 인간의 머리로 경우의 수를 해결하기 힘들다.

  + 객체의 타입 존재이유
  객체의 타입으로 알고리즘을 대체한다.
  타입이 유효성 체크를 점검한다.
  함축적인 알고리즘을 대체 할수 있는 키워드(별칭)이다.

  + 타입의 장점
  알고리즘이 20줄씩 길어질 필요 없이 타입을 통해 확인이 가능하다.
  강타입 언어의 관점

  + 개발이 어려운이유
  쉬운 개념이 100개 이상 쌓여야 프로 개발자 이다.

  + protocol(약속)
  INFO
    TITLE
    HEADER
    ITEMS
  명확하게 정해진 형식의 데이터를 넘겨주기 위해 INFO 객체를 만든다.

  + Data는 Info를 보장하지 않는다.
*/