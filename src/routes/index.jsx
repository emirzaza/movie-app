import { createFileRoute } from '@tanstack/react-router'
import Layout from '../components/layout'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      
    </div>
  )
}