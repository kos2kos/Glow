import { API_ROOT } from '../constants';

export const fetchConversations = () => {
  return(
    fetch(`${API_ROOT}/conversations`)
    .then(resp => resp.json())
  )
}
