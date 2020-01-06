import React from 'react';
import './App.css';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    
    const totalPage = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        totalPage.push(i);
    }

    return (
    <div className="pagination_box">
        <ul className="pagination">
            <li className="page-item">
                <button onClick={() => {
                    if(currentPage === 1) return;
                    currentPage = currentPage - 1;
                    paginate(currentPage);
                }} className="button-design-small">
                    &lt;
                </button>
            </li>
            <li className="page-item">
                {currentPage}/{totalPage.length}
            </li>
            <li className="page-item">
                <button onClick={() => {
                    if(currentPage === totalPage.length) return;
                    currentPage = currentPage + 1;
                    paginate(currentPage);
                }} className="button-design-small">
                    &gt;
                </button>
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