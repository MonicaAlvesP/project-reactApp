import React, { Component } from 'react';
import './styles.css';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 3,
      searchValue: '',
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts()

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    const updatedPosts = [...posts, ...nextPosts];

    this.setState({ posts: updatedPosts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    // se a pagina que quero ir for maior ou igual a quantidade de posts, não tem mais posts
    const noMorePosts = page + postsPerPage >= allPosts.length;

    // se eu digitar algo no input, filtra os posts e retorna os que contém o valor digitado
    // se não, retorna todos os posts normalmente
    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase())
      })
      : posts;

    return (
      <section className='container'>
        {!!searchValue && (
          <h1>Buscando o valor: {searchValue}</h1>
        )}

        <div className='container-input'>
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange} />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts que iniciem com este titulo</p>
        )}

        <div className="btn-container">
          {!searchValue && (
            <Button
              text="Carregar mais posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;