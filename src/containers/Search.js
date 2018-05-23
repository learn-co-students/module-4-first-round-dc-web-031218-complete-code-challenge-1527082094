import React from 'react'

class Search extends React.Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.props.handleSearch(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
          <input onChange={this.handleChange} type="text" value={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default Search
