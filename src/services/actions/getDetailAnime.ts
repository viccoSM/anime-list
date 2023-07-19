import {useQuery, gql} from '@apollo/client';
import {createApolloClient} from "@/services/client";
import {useMemo} from "react";

const GET_DETAIL_ANIME = gql`
  query ($id: Int) {
    Media (id: $id, type: ANIME) { 
      id
      bannerImage
      description
      genres
      averageScore
      episodes
      title {
        romaji
      }
    }
  }
`;

export interface DetailAnimeParams {
  id: number
}

export function useGetDetailAnime(params: DetailAnimeParams) {
  const client = useMemo(() => createApolloClient(), []);

  return useQuery(GET_DETAIL_ANIME, {
    client,
    variables: {id: params.id}
  });
}