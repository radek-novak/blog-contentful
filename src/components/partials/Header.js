import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import { getCategories } from '../../content'

const CatLink = ({name}) => (
  <li>
    <Link to={`/category/${name}`}>{name}</Link>
  </li>
)
CatLink.propTypes = {
  name: PropTypes.string.isRequired
}

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryList: null
    }
  }

  componentWillMount() {
    getCategories.then( res => this.setState({
      categoryList: res.items.map(catItem => catItem.fields.title)
    }))

  }

  render() {
    const { categoryList } = this.state
    return (
      <header className="page-header">
          <div className="container">
              <q className="page-header__quote">Nechte mi právo mých vlastních omylů a možnost zvolit, co mám rád.</q>
              <div className="clearfix"></div>
              <nav className="navigation">
                  <ul>
                      <li><Link to="/">Hlavní</Link></li>
                      <li className="opening"><a>Kategorie</a>
                        <ul id="categories">
                            { categoryList ? categoryList.map((cat, i) => <CatLink name={cat} key={`ctlink${i}`}/>) : 'nacitam'}
                        </ul>
                      </li>
                      {/* <li><a>Hledání</a></li> */}
                      <li><Link to="/about">O Autorovi</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
    )

  }
}

Header.propTypes = {}
