import "./index.css";

export default function Tree() {
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
        <p>root</p>
        <p className="tab">ant</p>
        <p className="tab">bear</p>
        <p className="tab2">cat</p>
        <p className="tab2">dog</p>
        <p className="tab3">elephant</p>
        <p className="tab">frog</p>
      </div>
    </div>
  );
}
