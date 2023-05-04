import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log('render')
        {/* //destructuring */ }
        const { monsters } = this.props;
        console.log(this.props)
        return <div>
            {monsters.map((monster) => (<h1 key={monster.id}>{monster.name}</h1>))}
        </div>
    }
}

export default CardList;