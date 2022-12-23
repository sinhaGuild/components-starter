import {
  AnimateSubtitle,
  AnimateTitle,
  Container,
  Hero,
  HeroSubtitle,
  HeroTitle,
  InViewSection,
} from "./components";

function App() {
  return (
    <Container>
      <AnimateTitle>Vite + React </AnimateTitle>
      <AnimateSubtitle>
        Another Starter template using tailwind. <br />
        Built for ease of boilerplate.{" "}
      </AnimateSubtitle>
      <InViewSection>
        <Hero>
          <HeroTitle>
            You're entitled to action. <br />
            Never to its fruits.
          </HeroTitle>
          <HeroSubtitle>
            Be even tempered in successs & in failure. This evenness of temper
            is Yoga .<br />
            Work done with anxiety about results is far inferior to work done
            without such anxiety, in the calm of self-surrender
          </HeroSubtitle>
        </Hero>
      </InViewSection>
      <img
        className="mx-auto rounded-lg"
        src="https://i.imgur.com/FSRUkmA.jpg"
        alt="hero"
      />
      <InViewSection>
        <Hero>
          <HeroTitle>
            You're entitled to action. <br /> Never to its fruits.
          </HeroTitle>
          <HeroSubtitle>
            Be even tempered in successs & in failure. This evenness of temper
            is Yoga .<br />
            Work done with anxiety about results is far inferior to work done
            without such anxiety, in the calm of self-surrender
          </HeroSubtitle>
        </Hero>
      </InViewSection>
      <img
        className="mx-auto rounded-lg"
        src="https://i.imgur.com/FSRUkmA.jpg"
        alt="hero"
      />
    </Container>
  );
}

export default App;
