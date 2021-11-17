const TreeNode = ({ node, children, level }) => {
  
  const defineClassName = (level) => {
    console.log(level);
    if(level.split('.').length === 2) {
      return "tab";
    } else if (level.split('.').length === 3) {
      return "tab2";
    } else if (level.split('.').length === 4) {
      return "tab3";
    } else {
      return "";
    }
  }

  return (
    <>
      <p className={defineClassName(level)}>{node}</p>
      {children &&
        children.map((node) => (
            <TreeNode {...node} />
        ))}
    </>
  );
};

export default TreeNode;
