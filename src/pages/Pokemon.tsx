
import { useParams } from 'react-router-dom'

function Pokemon() {

  // const params = useParams()
  const { name } = useParams();


  return (
    <div>{name}</div>
  )
}

export default Pokemon