import { h, render } from 'preact'
import Router from 'preact-router'
import ArticleList from '@/contents/ArticleList'

const Main = () => (
  <Router>
    <ArticleList path='/' />
    <ArticleList path='/about' />
    <ArticleList path='/search/:query/:advanced?' />
  </Router>
)

render(<Main />, document.body)
