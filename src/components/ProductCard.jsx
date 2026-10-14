import { useState } from 'react'

function ProductCard(props) {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function remove() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <article>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price.toLocaleString('ru-RU')} ₽</p>

      <div>
        <button onClick={add}>Добавить в корзину</button>
        <button onClick={remove} disabled={count === 0} title="Убрать из корзины">
          −
        </button>
      </div>

      <footer>
        В корзине: <strong>{count}</strong> шт.
        {count > 0 && <small>Сумма: {(props.price * count).toLocaleString('ru-RU')} ₽</small>}
      </footer>
    </article>
  )
}

export default ProductCard