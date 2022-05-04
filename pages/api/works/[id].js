import { portfolio_works } from '../../../data'

export default function productHandler({ query: { id } }, res) {
  const filtered = portfolio_works.filter((p) => p.id === id)

  // Product with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `portfolio work with id: ${id} not found.` })
  }
}