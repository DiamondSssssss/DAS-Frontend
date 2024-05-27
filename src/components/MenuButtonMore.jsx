// @ts-nocheck
import { Menu } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import React from "react";

export const MenuButtonMore = ( props ) => {
  const [ selectedItem, setSelectedItem ] = React.useState( "Title" );
  const menuButtonRef = React.useRef( null ); // Ref to the Menu.Button
  const menuItemsRef = React.useRef( null ); // Ref to the Menu.Items

  const handleMenuItemClick = ( item ) => {
    setSelectedItem( item );
  };

  return (
    <Menu as="div" className=" left-0 relative w-fit h-fit text-left">
      <div>
        <Menu.Button className="" ref={ menuButtonRef }>
          <EllipsisVerticalIcon className="w-5 h-5"></EllipsisVerticalIcon>
        </Menu.Button>
      </div>

      <Menu.Items
        className="flex w-[150px] top-4 h-fit  py-1 rounded-[20px] absolute mt-2 bg-white  shadow-lg "
        ref={ menuItemsRef }
      >
        {/* <div className="w-full h-full  flex flex-col items-center justify-center"> */ }
        <div className="">
          { props?.dataButton.map( ( data, index ) => (
            <React.Fragment key={ index }>
              <Menu.Item className="cursor-pointer">
                { ( { active } ) => (
                  <div
                    className={ `flex flex-row justify-start items-center gap-2 px-2 py-1` }
                    onClick={ data?.event }
                  >
                    <img src={ data?.url } className="h-4 w-4" />
                    <div className="w-full font-baloo2 font-medium">
                      { data?.name }
                    </div>
                  </div>
                ) }
              </Menu.Item>

              { index < props?.dataButton.length - 1 && (
                <div className="w-full border-[1px] border-gray_background_05 shadow-3xl "></div>
              ) }
            </React.Fragment>
          ) ) }
        </div>
      </Menu.Items>
    </Menu>
  );
};
