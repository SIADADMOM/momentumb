const quotes = [
  {
    quote: "우리가 이 땅에서 고양이한테 어떻게 대해주느냐에 따라 천국에서의 위치가 달라진다.",
    author: "- 로버트 A. 하인라인 -",
  },
  {
    quote: "고양이의 눈 속에는 세상 모든것이 있다.",
    author: "- 콜렛 -",
  },
  {
    quote: "만약 고양이가 나무에서 떨어지면 집 안에 들어가서 웃으라.",
    author: "- 패트리샤 히치콕 -",
  },
  {
    quote: "고양이는 꼭 사진찍기 불가능할 때만 가장 기묘하고, 흥미롭고, 아름다운 포즈를 취한다. 그래서 고양이 달력에는 실망스럽게도 항상 대중용 포즈밖에 나와있지 않다.",
    author: "- J. R. 코울슨 -",
  },
  {
    quote: "고양이는 까다로운 동물이 아니다. 그냥 장미무늬 접시에다 우유를 주고 파란 접시에다 생선을 주기만 하면 된다. 그러면 고양이는 음식을 물고 바닥에서 먹을 것이다.",
    author: "- 아더 브리지스이솝 -",
  },
  {
    quote: "고양이들과 함께 침대 위에서 잘 때 힘든 점은 고양이가 사람 옆에서 자려하지않고 사람 위에서 자려하려는 것이다.",
    author: "- 팸 브라운 -",
  },
  {
    quote: "고양이를 모르는 사람들이 보기에는 모든 고양이들이 비슷한 존재이다. 하지만 고양이 애호가들이 보기에는 모든 고양이들이 놀라울 정도로 완전히 다른 각자의 개성을 가지고 있다.",
    author: "- 제니 드 브라이즈 -",
  },
  {
    quote: "고양이는 우리가 침대에 자는 것을 허락해준다. 침대 모서리에서.",
    author: "- 제니 드 브라이즈 -",
  },
  {
    quote: "아기 고양이들은 눈이 크고, 부드럽고, 사랑스럽다. 그리고 그들의 입과 발에는 날카로운 바늘이 있다.",
    author: "- 팸 브라운 -",
  },
  {
    quote: "고양이와 함께 하는 시간은 절대 낭비되는 시간이 아니다.",
    author: "- 콜렛 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;