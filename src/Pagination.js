import React from 'react';




const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    
    const totalPage = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        totalPage.push(i);
    }

    return (
    <div className="pagination_box">
        <ul className="pagination">
            <li className="page-item">
                <a onClick={() => {
                    if(currentPage === 1) return;
                    currentPage = currentPage - 1;
                    paginate(currentPage);
                }} href="#" className="page-link">
                    이전페이지
                </a>
            </li>
            <li className="page-item">
                {currentPage}/{totalPage.length}
            </li>
            <li className="page-item">
                <a onClick={() => {
                    if(currentPage === totalPage.length) return;
                    currentPage = currentPage + 1;
                    paginate(currentPage);
                }} href="#" className="page-link">
                    다음페이지
                </a>
            </li>
        </ul>
    </div>
    );

    // return (
    //  <div className="pagination_box">
    //   <ul className="pagination">
    //       {pageNumbers.map(number => (
    //         <li key={number} className="page-item">
    //             <a onClick={() => paginate(number)} href="#" className="page-link">
    //                 {number}
    //             </a>
    //         </li>
    //       ))}
    //   </ul>
    // </div>
    // );
};

export default Pagination