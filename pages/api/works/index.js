import { portfolio_works } from '../../../data'

export default function handler(req, res) {
  res.status(200).json(portfolio_works)
}
