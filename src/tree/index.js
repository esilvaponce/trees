import "./index.css";
import dataJSON from "./data.json";
import TreeNode from './TreeNode';

export default function Tree() {
  
  return (
    <TreeNode {...dataJSON}/>
  );
}
