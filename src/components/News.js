/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { animateScroll as scroll } from "react-scroll";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  article = [];
  constructor(props) {
    // console.log("i am a constructor")
    super(props);
    this.state = {
      article: this.article,
      page: 1,
      totalResults: 0,
      loading: true,
    };
    document.title = `NewsCroc Top Punches from ${this.props.category}`;
    this.audio = new Audio("smoke-143172.mp3");
  }
  async updatenews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2a557c50c0434edf9b91d2281ba037be&page=${this.state.page}&pagesize=20`;
    let data = await fetch(url);
    this.props.setProgress(20);
    this.props.setProgress(30);
    let json = await data.json();
    this.props.setProgress(60);
    this.setState({
      article: json.articles,
      totalResults: json.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatenews();
  }

  fetchMoreData = async () => {
    // this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=2a557c50c0434edf9b91d2281ba037be&page=${
      this.state.page + 1
    }&pagesize=20`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    // this.props.setProgress(20);
    // this.props.setProgress(30);
    let json = await data.json();
    // this.props.setProgress(60);
    this.setState({
      article: this.state.article.concat(json.articles),
      totalResults: json.totalResults,
    });
    // this.props.setProgress(100);
  };

  render() {
    return (
      <>
        <h1 style={{ marginTop: "100px" }}>{document.title}</h1>

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={
            this.state.loading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )
          }
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element) => {
                return (
                  <div className="col-md-3 my-3 " key={element.url}>
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 40) : "....."
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "..."
                      }
                      ImageURL={element.urlToImage}
                      article={element.article}
                      Newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      name={element.source.name}
                    />
                  </div>
                );
              })}
              <div className="container">
                <button
                  onClick={() =>
                    scroll.scrollToTop({ duration: 500, smooth: true })
                  }
                  style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "blue",
                    color: "white",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    zIndex: "99",
                    textAlign: "center",
                  }}
                >
                  <big>&#8679;</big>
                </button>
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
