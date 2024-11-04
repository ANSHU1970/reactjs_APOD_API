// import React from 'react'

// export default function Sidebar(props) {
//     const {showModal,handleToggleModal,data}=props
//   return (
//     <div className='sidebar'>
//         <div className='bgOverlay'></div>
//         <div className='sidebarContents'>
//         <h2>{data?.title}</h2>
//         <div className='desContainer'>
//             <p className='desTitle'>{data?.date}</p>
//             <p>{data?.explanation}</p>
//             <button onClick={()=>{handleToggleModal()}}><i className="fa-solid fa-arrow-right"></i></button>
//         </div>
        
//     </div>
//     </div>
//   )
// }


import React, { useEffect, useRef } from 'react';

export default function Sidebar(props) {
    const { showModal, handleToggleModal, data } = props;
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                handleToggleModal(); // Close the sidebar if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleToggleModal]);

    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="desContainer">
                    <p className="desTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                    <button onClick={handleToggleModal}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
