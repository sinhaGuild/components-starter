import {
  AnimateSubtitle,
  AnimateTitle,
  Cards,
  Container,
  Hero,
  HeroSubtitle,
  HeroTitle,
  InViewSection,
  StaggeredText,
} from "./components";

function App() {
  return (
    <Container>
      <InViewSection>
        <AnimateTitle>Vite + React </AnimateTitle>
        <AnimateSubtitle>
          Another Starter template using tailwind. <br />
          Built for ease of boilerplate.{" "}
        </AnimateSubtitle>
      </InViewSection>

      {/* <Cards
        labels="Epic Itihas"
        tags="A B 99D A08"
        subtitle="Merry Go round its round its round."
        backgroundImage="https://i.imgur.com/mFb0rH0.jpg"
        description="With a new line. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem perspiciatis, enim quam, at provident non quos adipisci totam autem voluptatem aliquid corporis fugiat vitae magni. Ipsum praesentium sapiente ullam?"
      >
        This is a Random Card <br />
        New Line.
      </Cards> */}

      <StaggeredText title="Quantum Truth is incomprehensible." />
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
