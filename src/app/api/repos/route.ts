import { getRepos } from "@/utils/github";
import { NextResponse } from "next/server";
import { Repo } from "@/types/repo";

export async function GET(): Promise<NextResponse<Repo[]>> {
  const repos = await getRepos();
  return NextResponse.json(repos);
}
