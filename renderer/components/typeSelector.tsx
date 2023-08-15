import type { RadioChangeEvent } from "antd";
import { Radio, Select } from "antd";
import React, { useState } from "react";

const TypeSelector = () => {
  const typeOptions = ["VA", "NVA", "NNVA"];
  const categoryOptions = ["Document", "Meeting", "Data"];
  const jobOptions = ["RA2.0", "ICE", "CO2"];
  const [typeSelected, setTypeSelected] = useState("VA");

  const typeChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log(value);
  };

  return (
    <div className="selector">
      <div className="selector-item selector-type">
        <p>Type</p>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={typeOptions}
          onChange={typeChange}
          value={typeSelected}
        />
      </div>
      <div className="selector-item selector-category">
        <p>Category</p>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          options={categoryOptions}
          onChange={typeChange}
          value={typeSelected}
        />
      </div>
      <div className="selector-item selector-job">
        <p>Job</p>
        <Select
          showSearch
          placeholder="Select job"
          options={jobOptions.map((opt) => ({ value: opt, label: opt }))}
          filterOption={(input, option) =>
            (option.label.toString() ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        />
      </div>
    </div>
  );
};

export default TypeSelector;
