export const FIRST_PAGE = {
  RESPONSE: {
    data: {
      items: [
        {
          id: 1,
          description: 'mock description 1',
          forks_count: 1111,
          html_url: 'mock-url-1',
          language: 'lang 1',
          name: 'mock-name-1',
          stargazers_count: 1001
        },
        {
          id: 2,
          description: 'mock description 2',
          forks_count: 2222,
          html_url: 'mock-url-2',
          language: 'lang 2',
          name: 'mock-name-2',
          stargazers_count: 2002
        },
        {
          id: 3,
          description: 'mock description 3',
          forks_count: 3333,
          html_url: 'mock-url-3',
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

export const LAST_PAGE = {
  RESPONSE: {
    data: {
      items: [
        {
          id: 100,
          description: 'mock description 100',
          forks_count: 11,
          html_url: 'mock-url-100',
          language: 'lang 100',
          name: 'mock-name-100',
          stargazers_count: 10
        },
        {
          id: 200,
          description: 'mock description 200',
          forks_count: 22,
          html_url: 'mock-url-200',
          language: 'lang 200',
          name: 'mock-name-200',
          stargazers_count: 20
        },
        {
          id: 300,
          description: 'mock description 300',
          forks_count: 33,
          html_url: 'mock-url-300',
          language: 'lang 300',
          name: 'mock-name-300',
          stargazers_count: 30
        }
      ]
    },
    headers: {
      link: '<https://mock-url-page-99>; rel="prev", <https://mock-url-page-1>; rel="first"'
    },
    status: 200
  }
}
