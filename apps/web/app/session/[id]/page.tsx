import { SessionLayout } from '@/features/session/ui/SessionLayout'

export default function SessionPage({
  params,
}: {
  params: { id: string }
}) {
  return <SessionLayout sessionId={params.id} />
}