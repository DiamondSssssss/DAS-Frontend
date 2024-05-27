import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBreadCrumb } from "redux/appSlice";
import { breadCrumbFormat } from "utils/dataFormat";
const CustomBreadcrumb = () => {
  // @ts-ignore
  const { breadCrumbItems } = useSelector( ( state ) => state.app );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect( () => {
    let root = "/" + location.pathname.split( "/" )[ 1 ];
    dispatch( updateBreadCrumb( [ root ] ) );
  }, [ location, dispatch ] );
  console.log( breadCrumbItems )
  return (
    <div className=" flex-1 w-full p-2  flex flex-row gap-4 items-center rounded-lg shadow-sm mb-2  font-bold bg-white">
      { breadCrumbItems.length > 0 && (
        <>
          { breadCrumbItems.map( ( item, index ) => {
            return (
              <React.Fragment key={ index }>
                { index !== 0 && (
                  <img src="/icons/breadcrumbArrow.svg" alt="img" />
                ) }
                <button
                  className="text-blue_dark "
                  onClick={ () => {
                    if ( index < breadCrumbItems.length - 1 ) {
                      navigate( breadCrumbItems[ 0 ] );
                    }
                  } }
                >
                  { index === 0
                    ? breadCrumbFormat( breadCrumbItems[ index ] )
                    : item }
                </button>
              </React.Fragment>
            );
          } ) }
        </>
      ) }
    </div>
  );
};

export default CustomBreadcrumb;
