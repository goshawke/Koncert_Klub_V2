import { useNavigate } from 'react-router-dom';


export const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button id='backBtn' onClick={() => navigate(-1)}>
      Go Back
    </button>
  )
}
