import CustomModal from "components/CustomModal";
import React, { useState, useEffect } from "react";

const SectionInfo = ({ open, info, onClose, ...restProps }) => {
  const [data, setData] = useState(info);

  useEffect(() => {
    setData(info);
  }, [open, info]);

  return (
    data && (
      <CustomModal header={data.name} open={open} onClose={onClose} {...restProps}>
        <div className="space-y-6">
          <p className="leading-relaxed">Phạm vi kiến thức: {data.grade}</p>
          <p className="leading-relaxed">Mô tả: {data.description}</p>
          {/* <div className="leading-relaxed">
            Bài học:
            <ol className="ml-4">
              {data.subjects.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div> */}
        </div>
      </CustomModal>
    )
  );
};

export default SectionInfo;
