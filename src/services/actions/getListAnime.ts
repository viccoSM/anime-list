import {useQuery, gql} from '@apollo/client';
import {createApolloClient} from "@/services/client";
import {useMemo} from "react";

const GET_LIST_ANIME = gql`
    query Page($page: Int!, $limit: Int!) {
      Page(page: $page, perPage: $limit) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
        }
        media(type: ANIME) {
          id
          bannerImage
          title {
            romaji
          }
        }
      }
    }
  `;

export interface PaginationParams {
  page: number
  limit: number
}

export function useGetListAnime(params: PaginationParams) {
  const client = useMemo(() => createApolloClient(), []);

  return useQuery(GET_LIST_ANIME, {
    client,
    variables: {page: params.page, limit: params.limit}
  });
}