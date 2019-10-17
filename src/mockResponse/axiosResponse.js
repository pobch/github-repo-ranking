export const FIRST_PAGE = {
  RESPONSE: {
    data: {
      items: [
        {
          id: 1,
          description: 'mock description 1',
          forks_count: 1111,
          html_url: 'mock url 1',
          language: 'lang 1',
          name: 'mock-name-1',
          stargazers_count: 1001
        },
        {
          id: 2,
          description: 'mock description 2',
          forks_count: 2222,
          html_url: 'mock url 2',
          language: 'lang 2',
          name: 'mock-name-2',
          stargazers_count: 2002
        },
        {
          id: 3,
          description: 'mock description 3',
          forks_count: 3333,
          html_url: 'mock url 3',
          language: 'lang 3',
          name: 'mock-name-3',
          stargazers_count: 3003
        }
      ]
    },
    headers: {
      link: '<https://mock-url-page-2>; rel="next", <https://mock-url-page-100>; rel="last"'
    },
    status: 200
  }
}
