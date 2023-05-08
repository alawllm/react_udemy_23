
import Card from '../card/card.component';
import './card-list.styles.css'

//destructuring out of the argument
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster} />
        }
        )}
    </div>
)

export default CardList;