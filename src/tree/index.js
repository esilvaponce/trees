import "./index.css";

export default function Tree() {
  let numberLine = (className) => {
    
  }; 
  return (
    <div className="tree">
      <div>
      <h2> Before -> With "&nbsp" </h2>
        <p>root</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
      </div>
      <div>
        <h2> After -> Without "&nbsp" </h2>
        <p>1 root</p>
        <p className="tab">1.1 ant</p>
        <p className="tab">1.2 bear</p>
        <p className="tab2">1.2.1 cat</p>
        <p className="tab2">1.2.2 dog</p>
        <p className="tab3">1.2.2.1 elephant</p>
        <p className="tab">1.3 frog</p>
      </div>
    </div>
  );
}
