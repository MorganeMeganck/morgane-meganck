
import React from "react";
import Layout from '../layout'
import styled from 'styled-components';
import IndexPage from '../pages/index'
import Portfolio from '../pages/portfolio'
import classNames from 'classnames';
import ProjectCategory from "../components/projectcategory";

class Collection extends React.Component {

    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this)
        this.categoryNode = this.categoryNode.bind(this)
        this._focusOff = this._focusOff.bind(this)

        this.state = {
          open: false,
          activeIndex: null,
          categories: []
        }
    }
    componentDidMount() {
      // this._getCategories(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
      this.setState({
        categories: [{"thumbnail":"/img/prout.svg","link":"www.google.be","taxonomy":"category","count":6,"name":"consequat","slug":"commodo","id":"586537da62981d5fb8c21617"},{"thumbnail":"/img/prout2.svg","link":"www.google.be","taxonomy":"category","count":8,"name":"non","slug":"laborum","id":"586537da60c040bc1e3060a1"},{"thumbnail":"/img/prout.svg","link":"www.google.be","taxonomy":"category","count":3,"name":"non","slug":"commodo","id":"586537daffc67c66ec4dc356"}]
      })
    }
    _getCategories() {
      let _this = this
      let url = 'http://beta.json-generator.com/api/json/get/E1NpHQAEf';
      fetch(url).then( response => response.json() )
      .then( json => { _this.setState({ categories: json }) })
    }
    _handleClick(i){
      this.setState({
        activeIndex: i,
        open: true
      })
    }
    _focusOff(e){
      e.preventDefault()
      if (e.target.className !== 'category--image') {
        this.setState({
          activeIndex: null,
          open: false
        })
      }
    }
    categoryNode(cat, i){
        let isLast = ( i === this.state.categories.length - 1 || i === this.state.categories.length - 2)
        let shiftLeft = ( i < this.state.activeIndex )

        return (
          <ProjectCategory
            cat={cat}
            key={'cat-' + i}
            handleClick={this._handleClick}
            active={i === this.state.activeIndex}
            focusOff={this._focusOff}
            focused={this.state.open}
            shiftLeft={shiftLeft}
            Index={i}
            isLast={isLast}
          />
        )
    }
    render() {
      let catNodes = this.state.categories.map(this.categoryNode)
      let classes = classNames({
        focused: this.state.open
      })
      return (
        <div className={'categories--menu-container ' + classes} onClick={this._focusOff} style={{height: window.innerHeight}}>
          <ul className="categories menu portfolio">
            {catNodes}
          </ul>
        </div>
      )
    }
}

export default Collection;