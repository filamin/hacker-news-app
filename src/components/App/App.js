import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import List from "../List";
import Loader from "../Loader";
import { colorsDark } from "../../styles/palette";
import { Wrapper, Title, Container } from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }
  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, isFetching } = this.props;
    return (
      <ThemeProvider theme={colorsDark}>
        <Container>
          <Wrapper>
            <Title>Hacker News App</Title>
            {isFetching ? <Loader /> : null}
            <List stories={stories} />
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
