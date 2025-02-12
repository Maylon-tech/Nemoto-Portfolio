
interface Props {
    image: string
    user: string
    role: string
}

const ClientReviewCard = ({ image, role, user }: Props) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      Card - Client
    </div>
  )
}

export default ClientReviewCard
