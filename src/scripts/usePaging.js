import { useState, useCallback } from 'react';

const usePaging = baseUrl => {
  const [data, setData] = useState([]);
  const [pagingState, setPagingState] = useState({
    isFetching: false,
    currentPage: 1,
    totalPage: 0,
  });

  const setWithPrevState = state => {
    setPagingState(prev => ({
      ...prev,
      ...state,
    }));
  };

  const fetchData = useCallback(
    (query, isReload = false) => {
      setWithPrevState({ isFetching: true });
      if (!query.page) {
        query.page = 1;
      }
      let params = Object.assign({}, query);
      Object.keys(params).map(key => key + '=' + params[key]).join('&');
      const url = `${baseUrl}?${params}`;
      fetch(url, query)
        .then((response) => response.json())
        .then(result => {
          setData(
            data?.length && !isReload
              ? [...data, ...result.data.data]
              : result.data.data,
          );
          setWithPrevState({
            isFetching: false,
            totalPage: result.data.total,
            currentPage: query.page,
          });
        })
        .catch(() => {
          setWithPrevState({ isFetching: false });
        });
    },
    [data],
  );

  const loadMore = useCallback(
    query => {
      if (!pagingState.isFetching && data.length < pagingState.totalPage) {
        fetchData({ ...query, page: pagingState.currentPage + 1 });
      }
    },
    [pagingState],
  );

  const Api = {
    fetchData,
    loadMore,
  };

  return [data, pagingState, Api];
};

export default usePaging;
