import { useState, useEffect } from "react";

export default function usePagination(posts) {
  const [totalPageNumber, setTotalPageNumber] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const getPageNumber = async () => {
    try {
      setTotalPageNumber(Math.ceil(posts.length / 6));
    } catch (error) {
      console.log(error);
    }
  };

  const getItemsForPage = () => {
    const startIndex = currentPage * 6;
    const endIndex = startIndex + 6;
    return posts.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage === Math.ceil(posts.length / 6) - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage === 0) {
      setCurrentPage(Math.ceil(posts.length / 6) - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (posts) {
      getPageNumber();
    }
  }, [posts]);

  return {
    totalPageNumber,
    currentPage,
    getItemsForPage,
    handleNextPage,
    handlePreviousPage,
    getPageNumber,
  };
}
