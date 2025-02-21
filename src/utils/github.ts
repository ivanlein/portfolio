import { Octokit } from "@octokit/rest";
import { Repo } from "@/types/repo";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // (опционально) для приватных репозиториев
});

export const getRepos = async (): Promise<Repo[]> => {
  const response = await octokit.repos.listForUser({
    username: "ivanlein",
    sort: "updated",
    per_page: 10,
  });
  return response.data as Repo[];
};
