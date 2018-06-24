/*
  + 학습이란?
  컴퓨터 언어를 배운다는건
  언어의 모든 용어의 개념을 한국어로 배운게 아니면 학습한게 아니다.

  + 개발자가 할수 있는 일
  우리가 프로그래밍을 한다는것은 이름을 짓는것 밖에 할 수 없다.
  변수나 함수의 이름을 통해 의미가 전달 되어져야 한다.
  문법 체계가 중요한것은 아닌다.
  의도가 전달 되어져야 협업을 위한 좋은 코드이다.
  
  + 우선순위의 규칙
  안의 내용이 중요한게 아니다. 
  어플리케이션의 실체를 잘 파악해야 한다.
  호출 코드 먼저 짜고 로직을 그려야 한다.
  껍데기를 만들면 끝이다.

  + TDD 주도 개발
  테스트를 먼저 작성하고 
  테스트가 돌아가는 코드를 만든다.
  사용하는 쪽을 만들고 
  대응하는 코드를 만든다.

  + 추론
  load함수만 보고 렌더가 존재할 것이라고 유추할수 있어야 한다.

  + load vs render
  바깥쪽에는 분리를 안하더라도 내부에서 메서드를 따로 두고서라도 분리한다.
  load가 비동기이기 떄문에 밑에 렌더를 호출할 수 없다의 부연 설명은 없다.

  + 한국어적인 생각을 코드로 변환해야 한다.
  우리는 코드를 느려지게 만들수 없다.
  코드에 생각한 바를 최대한 많이 표현한다.
  인식한 최대한의 수준을 코드로 표현해라(주석보단 났다.)
  주석은 아무것도 보장하지 않는다. 코드로 틈만나면 표현해라.
  남의 코드도 최대한 읽어라.

  + 내장을 꺼내지 마라.
  모든 책임은 노출한 나에게 있다.
  방어는 생명이다.

  + async 이전의 방식
  promise then
  _render의 의미
  이 메서드는 priviate 메서드라는 의사표현

  + 조각이 아니라 소조다.
  소조: 진흙을 부쳐서 모양을 만든다.
  조각: 덩어리를 깍아서 만드는게 아니다.

  + 한번의 하나의 요소를 작성해라
  머리가 좋다면 복잡한걸 여러개를 작성할 수 있다.
  머리에 로딩하는 양이 많을수록 프로그램을 짜기에 유리하다.

  + async await
  비동기이지만 동기 로직처럼 표현 할 수 있다.
  async await는 표준이다.

  + json data 해체하고 data validation 해주기
  세상에서 들어오는 모든 인풋은 100프로 나를 엿먹인다.
  입력은 항상 예측하지 못한다.
  네이버에 한글아이디가 존재함
  블리자드도 런칭하자마자 당일날 점검함
  입력을 받는순간 무슨일이 발생할 줄 모른다.
  프로와 아마추어의 차이 
  의심병자냐 아니냐

  + javascript 해체 구문
  throw 예외처리를 가지고 있다. 기본적으로 헤체 할당 속성이 없을때
  프로개발자의 경우는 유효성 검사만 20줄이다.
  상상도 안간다.
  값이 널인 경우, 길이가 널인 경우 ...

  + 함수에 값을 넘기려면
  인자로 넘기거나 전역의 참조를 사용해야한다.
  전역의 참조는 너무 위험하다.
  지역 참조는 컨텍스트 이다.
  객체지향에서 참조는 인스턴스내의 참조이다.(this)

  + 클래스 안의 메서드는 함수가 아니다.
  인자로 보내는게 아니라 this로 쓰는게 맞다.

  + 화이트 리스트 
  이미 검증로직이 된 리스트
  클래스 안의 메서드는 이미 화이트 리스트를 거친 것이므로 인자로 전달하지 않는다.

  + 한국어와 중간언어 코드
  한국어로 사고하고
  의사코드를 만들고
  코드로 변환한다.

  + 코드 한줄한줄을 다 설명하고 이해해야 한다.

  + error 3 step
  유일한 compile error: syntax error
  runtime error: 수정불가 throw 처리가 최고
  context error: 모든 프로그램이 동작하나 처리결과를 알수가 없음
  ex) 월급이 50프로가 입금이 됨.

  + load의 정책과 render의 정책이 다름
  데이터 정책의 두군데의 문제점

  + table 생성, 캡션을 title로

  + reduce helper
  es6 이후 도우미 함수들이 많아져서
  for logic 등을 쓸일이 매우 적어졌다.
*/