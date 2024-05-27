// @ts-nocheck
import React from "react";

import { AddNewTopic } from "./AddNewTopic";
import { Modal } from "./Modal";

const AddTopic = ( props ) => {
  return (
    <Modal HandleFalse={ props.HandleFalse }>
      <AddNewTopic
        HandleFalse={ props.HandleFalse }
        HandleAdd={ props?.HandleAdd }
      />
    </Modal>
  );
};

export default AddTopic;
