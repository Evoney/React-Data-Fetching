import axios from 'axios';
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom';
import { Repository } from '../Types/Repository';


export function Repos() {

  const {data: repositories, isFetching} = useQuery<Repository[]>('repos', async () => {
    const response = await axios
    .get('https://api.github.com/users/evoney/repos')

    return response.data;
  }, {
      staleTime: 1000 * 30, // 30 seg
  })

  return (
    <>
      {isFetching && <p>Carregando...</p>}
    <ul>
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>
                {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
    </>
  )
}

