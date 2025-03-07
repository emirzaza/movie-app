import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/person')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div></div>
}
