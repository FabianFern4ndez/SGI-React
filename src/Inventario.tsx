import { useEffect, useState } from "react"

interface Item {
  id: number
  descripcion: string
  price: number
}

function Inventario() {
  const [items, setItems] = useState<Item[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log("Datos recibidos:", data)
        setItems(data)
        setCargando(false)
      })
      .catch((err) => {
        console.error("Error al obtener items:", err)
        setError(err.message)
        setCargando(false)
      })
  }, [])

  if (cargando) return <p>Cargando items...</p>
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>

  return (
    <div>
      <h2>Inventario</h2>
      {items.length === 0 ? (
        <p>No hay items en el inventario</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.descripcion} — ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Inventario