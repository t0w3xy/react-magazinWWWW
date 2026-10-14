import ProductCard from './components/ProductCard'
import './App.css'

import cup from './assets/cup.jpg'
import kettle from './assets/kettle.jpg'
import coffee from './assets/coffee.jpg'
import grinder from './assets/grinder.jpg'
import press from './assets/press.jpg'
import filters from './assets/filters.jpg'

const products = [
  { id: 1, name: 'Кружка «Утро»', price: 890, image: cup },
  { id: 2, name: 'Чайник', price: 4200, image: kettle },
  { id: 3, name: 'Кофе в зёрнах', price: 1150, image: coffee },
  { id: 4, name: 'Кофемолка', price: 5600, image: grinder },
  { id: 5, name: 'Френч-пресс', price: 1990, image: press },
  { id: 6, name: 'Набор фильтров', price: 490, image: filters },
]

function App() {
  return (
    <>
      <header>
        <h1>Магазин для кофемана</h1>
        <p>Добавляйте товары в корзину и убирайте, если передумали</p>
      </header>

      <main>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </main>
    </>
  )
}

export default App