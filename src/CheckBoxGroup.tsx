import { FC, useEffect, useState } from "react";
import "./styles.css";


type TOption={
  label:string
  value:number|string
}
const CheckBoxGroup: FC<{
  options:TOption[],
  defaultValue?:TOption['value'][]
  onChange?:(selectdValues:TOption['value'][],selectd:TOption[])=>void
}> = ({options,onChange,defaultValue=[]}) => {
  const [selectd, setselectd] = useState(new Set<TOption>([]))
  const [columns, setcolumns] = useState(3)
  useEffect(() => {
    defaultValue.length>0 && setselectd(new Set(options.filter(v=>defaultValue.includes(v.value))))
  }, [defaultValue])
  useEffect(() => {
    const selectd_arr = Array.from(selectd)
    onChange?.(selectd_arr.map(v=>v.value),selectd_arr)
  }, [selectd])
  
  return <div>
    <div style={{columnCount:columns}} className="checkboxgroup_806638">
      <label className="label_584078" >
        <input type="checkbox" checked={selectd.size==options.length} onChange={e => {
          setselectd(new Set(e.target.checked?options:[]))
        }} />select All
      </label>
      {options.map((v,i) => (
        <label className="label_584078" key={v.value}>
          <input type="checkbox" checked={selectd.has(v)} onChange={e => 
            setselectd(prevSet => {
              const temp = new Set(prevSet);
              e.target.checked ? temp.add(v) : temp.delete(v);
              return temp
            })
          } />
          {v.label}
        </label>
      ))}
    </div>
    <div className="columns_936096">
      columns:<input type="number" value={columns} min={1} max={10} step={1} onChange={e=>setcolumns(e.target.valueAsNumber)}/>
    </div>
    
  </div>

}
export default CheckBoxGroup