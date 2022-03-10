import { useRequest } from './hooks/useRequest';

type Repository = {
  full_name: string
  description: string
}
function App() {

  const {data: repositories, isFetching} = 
    useRequest<Repository[]>
    ('users/evoney/repos')

  return (
    <>
      {isFetching && <p>Carregando...</p>}
    <ul>
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default App
