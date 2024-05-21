import { useGetUserReposQuery } from "../redux/api/api";

const RepoList = () => {
  const { data, isLoading } = useGetUserReposQuery();

  const repos = data?.data;
  console.log(repos);

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">
        GitHub Repositories
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-lime-400 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-purple-600 font-semibold">
              {repo.name}
            </h2>
            <p className="mt-2 text-pink-600">Visibility : {repo.visibility}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 inline-block"
            >
              View Repository
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
